# Set up the SSH key
echo "$GIT_SSH_KEY" > /vercel/.ssh/vercel_key
chmod 600 /vercel/.ssh/vercel_key

# Start the SSH agent and add the key
eval "$(ssh-agent -s)"
ssh-add /vercel/.ssh/vercel_key

# Add GitHub to known hosts to prevent SSH warnings
mkdir -p /vercel/.ssh
ssh-keyscan github.com >> /vercel/.ssh/known_hosts

# Clone the repository with submodules
git clone --recursive git@github.com:kadirtuna/kadir-tuna-portfolio.git
