import os
import ftplib
import sys
from pathlib import Path

# ==========================================
# DEPLOYMENT CONFIGURATION
# ==========================================
FTP_HOST = "ftp.kliacustoms.net"
FTP_USER = "sunoarch@kliacustoms.net"
FTP_PASS = "Iris6102009@#"
REMOTE_DIR = "/"  # Deploy directly to the root
LOCAL_DIR = "./dist" # Folder to upload (Vite build output)
# ==========================================

def create_remote_dir(ftp, remote_dir):
    """Creates a remote directory if it doesn't exist."""
    dirs = remote_dir.strip('/').split('/')
    current_dir = ""
    for d in dirs:
        if not d: continue
        current_dir += f"/{d}"
        try:
            ftp.cwd(current_dir)
        except ftplib.error_perm:
            try:
                ftp.mkd(current_dir)
                ftp.cwd(current_dir)
                print(f"Created directory: {current_dir}")
            except Exception as e:
                print(f"Could not create directory {current_dir}: {e}")

def upload_directory(ftp, local_path, base_remote_path):
    """Uploads a local directory to the FTP server recursively."""
    if not os.path.exists(local_path):
        print(f"Error: {local_path} does not exist. Please run 'npm run build' first.")
        sys.exit(1)

    print(f"ðŸš€ Starting deployment to {FTP_HOST}...")
    
    # Ensure remote base directory exists
    if base_remote_path != "/":
        create_remote_dir(ftp, base_remote_path)
    
    ftp.cwd(base_remote_path)

    for root, dirs, files in os.walk(local_path):
        # Calculate remote path
        relative_path = os.path.relpath(root, local_path)
        if relative_path == ".":
            remote_path = base_remote_path
        else:
            # Replace windows slashes with forward slashes for FTP
            remote_path = f"{base_remote_path}/{relative_path.replace(os.sep, '/')}"
        
        # Create remote directories
        for d in dirs:
            dir_remote_path = f"{remote_path.rstrip('/')}/{d}"
            try:
                ftp.cwd(dir_remote_path)
            except ftplib.error_perm:
                try:
                    ftp.mkd(dir_remote_path)
                    print(f"Created remote dir: {dir_remote_path}")
                except:
                    pass

        # Upload files
        ftp.cwd(remote_path)
        for f in files:
            local_file_path = os.path.join(root, f)
            print(f"Uploading {f} ...", end=" ", flush=True)
            try:
                with open(local_file_path, "rb") as file_obj:
                    ftp.storbinary(f"STOR {f}", file_obj)
                print("Done!")
            except Exception as e:
                print(f"Failed. ({e})")

try:
    print(f"Connecting to {FTP_HOST}...")
    # Use FTP_TLS for secure connection
    ftp = ftplib.FTP_TLS(FTP_HOST)
    ftp.login(FTP_USER, FTP_PASS)
    ftp.prot_p() # Secure data connection
    print("âœ… Login successful!")

    # Upload the dist folder
    upload_directory(ftp, LOCAL_DIR, REMOTE_DIR)

    ftp.quit()
    print("\nðŸŽ‰ Deployment Completed Successfully!")

except ftplib.all_errors as e:
    print(f"\nâŒ FTP Error: {e}")
except Exception as e:
    print(f"\nâŒ Unexpected error: {e}")
