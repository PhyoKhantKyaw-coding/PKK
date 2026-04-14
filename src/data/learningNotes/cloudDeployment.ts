export interface LearningNote {
  id: string;
  title: string;
  content: string;
  examples?: string[];
  keyPoints?: string[];
}

export const tabId = 'cloud-deployment';
export const tabLabel = 'CLOUD (Deployment Guide)';
export const tabIcon = '☁️';

export const notes: LearningNote[] = [
  {
    id: 'what-is-cloud-computing',
    title: 'Cloud Computing ဆိုတာဘာလဲ? 🧠',
    content: `Cloud computing ဆိုတာ Internet ပေါ်မှာ server, database, storage သုံးတာဖြစ်ပါတယ်။

Local PC မလိုတော့ဘူး ❌

**Example:**
- App → Cloud server ထဲ run
- Database → Cloud DB
- File → Cloud storage

**Why use Cloud?**
✔ Scalable
✔ Cheap (pay-as-you-go)
✔ Secure
✔ Accessible anywhere`,
    examples: [
      'App → Cloud server, Database → Cloud DB, File → Cloud storage',
    ],
    keyPoints: [
      'Cloud = Internet-based server, database, storage',
      'No local PC needed',
      'Scalable, cheap, secure, accessible anywhere',
    ],
  },
  {
    id: 'cloud-models',
    title: 'Cloud Models ☁️',
    content: `**IaaS (Infrastructure as a Service):**
👉 Virtual machine rental
✔ AWS EC2, Azure VM
👉 You manage everything

**PaaS (Platform as a Service) 🔥:**
👉 Platform ready
✔ Azure App Service, AWS Elastic Beanstalk
👉 You just deploy code

**SaaS (Software as a Service):**
👉 Ready software
✔ Gmail, Google Drive

**Interview Tip:** "PaaS is best for developers"`,
    examples: [
      'IaaS: AWS EC2, Azure VM',
      'PaaS: Azure App Service, AWS Elastic Beanstalk',
      'SaaS: Gmail, Google Drive',
    ],
    keyPoints: [
      'IaaS = Virtual machine, you manage everything',
      'PaaS = Platform ready, just deploy code 🔥',
      'SaaS = Ready software',
      'PaaS is best for developers',
    ],
  },
  {
    id: 'azure-vs-aws-vs-godaddy',
    title: 'Azure vs AWS vs GoDaddy ☁️',
    content: `| Feature | Azure | AWS | GoDaddy |
|---|---|---|---|
| Popular | Enterprise | Global leader | Hosting |
| API Deploy | Easy | Advanced | Basic |
| DB | Azure SQL | RDS | Limited |
| Use | .NET | All stack | Simple websites |`,
    examples: [],
    keyPoints: [
      'Azure = Enterprise, easy API deploy, .NET focus',
      'AWS = Global leader, advanced, all stack',
      'GoDaddy = Simple hosting, basic features',
    ],
  },
  {
    id: 'deploy-dotnet-api-to-azure',
    title: 'Deploy .NET API to Azure 🚀 🔷',
    content: `**Step 1: Prepare Your Project**
- Update \`appsettings.json\` with production config
- Remove localhost URLs
- Set CORS policy for production domain

**Step 2: Publish Project**
\`dotnet publish -c Release -o ./publish\`
- \`-c Release\` = optimize for production
- \`-o ./publish\` = output folder

**Step 3: Create Azure App Service**
1. Go to Azure Portal → Create Resource → Web App
2. Fill:
   - Resource Group: \`my-api-group\`
   - Name: \`my-api-name\` (URL will be \`https://my-api-name.azurewebsites.net\`)
   - Publish: Code
   - Runtime: .NET 8 or .NET 10
   - OS: Windows (easier) or Linux
   - Region: Southeast Asia (closest to Myanmar)
   - Plan: Free (F1) for testing, B1+ for production

**Step 4: Deploy Methods (Choose One)**

**Method A — Visual Studio Publish:**
1. Right-click project → Publish
2. Select Azure → Azure App Service
3. Sign in → Select your App Service
4. Click Publish

**Method B — ZIP Deploy (CLI):**
\`az webapp deploy --resource-group my-group --name my-api --src-path ./publish.zip --type zip\`

**Method C — GitHub Actions:**
Create \`.github/workflows/deploy.yml\`:
\`\`\`yaml
name: Deploy to Azure
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0.x'
      - run: dotnet publish -c Release -o publish
      - uses: azure/webapps-deploy@v2
        with:
          app-name: my-api
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: publish
\`\`\`

**Step 5: Set Environment Variables**
Azure Portal → App Service → Configuration → Application settings:
- \`ConnectionStrings__DefaultConnection\` = \`Server=tcp:mydb.database.windows.net;Database=mydb;...\`
- \`JWT__Secret\` = \`your-secret-key\`
- \`JWT__Issuer\` = \`my-api\`

**Step 6: Verify & Test**
- Open \`https://my-api-name.azurewebsites.net/api/health\`
- Check Logs → Log Stream for errors
- Test all endpoints with Postman

**Result:** \`https://yourapi.azurewebsites.net\``,
    examples: [
      'dotnet publish -c Release -o ./publish',
      'az webapp deploy --resource-group my-group --name my-api --src-path ./publish.zip --type zip',
      'ConnectionStrings__DefaultConnection = Server=tcp:mydb.database.windows.net;Database=mydb;...',
    ],
    keyPoints: [
      'Publish with dotnet publish -c Release',
      'Create App Service: choose .NET runtime, OS, region, plan',
      '3 deploy methods: Visual Studio, ZIP Deploy, GitHub Actions',
      'Set env vars in Azure Configuration',
      'Verify with health check endpoint and logs',
    ],
  },
  {
    id: 'deploy-api-to-aws',
    title: 'Deploy API to AWS 🚀',
    content: `**Step 1: Create EC2 Instance**
1. Go to AWS Console → EC2 → Launch Instance
2. Choose:
   - Name: \`my-api-server\`
   - OS: Ubuntu Server 22.04 LTS (Free tier eligible)
   - Instance type: t2.micro (free) or t3.small
   - Key pair: Create/download \`.pem\` file
   - Security Group: Open port 22 (SSH), 80 (HTTP), 443 (HTTPS), 5000/5001 (API)
   - Storage: 20 GB gp2 minimum

**Step 2: SSH into EC2**
\`ssh -i /path/to/key.pem ubuntu@your-ec2-public-ip\`

**Step 3: Install .NET Runtime**
\`\`\`bash
sudo apt update
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo apt update
sudo apt install dotnet-sdk-8.0 -y
dotnet --version  # Verify
\`\`\`

**Step 4: Upload API**
**Method A — SCP:**
\`scp -i key.pem -r ./publish ubuntu@your-ec2-ip:/home/ubuntu/myapi\`

**Method B — Git Clone:**
\`git clone https://github.com/youruser/myapi.git && cd myapi && dotnet publish -c Release\`

**Step 5: Run API**
\`\`\`bash
cd /home/ubuntu/myapi
dotnet myapi.dll --urls="http://0.0.0.0:5000"
\`\`\`

**Step 6: Run as Background Service (Production)**
\`\`\`bash
sudo nano /etc/systemd/system/myapi.service
\`\`\`
Add:
\`\`\`ini
[Unit]
Description=My .NET API

[Service]
WorkingDirectory=/home/ubuntu/myapi
ExecStart=/usr/bin/dotnet /home/ubuntu/myapi/myapi.dll
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
\`\`\`
Then:
\`\`\`bash
sudo systemctl enable myapi
sudo systemctl start myapi
sudo systemctl status myapi
\`\`\`

**Step 7: Nginx Reverse Proxy (Production)**
\`\`\`bash
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/myapi
\`\`\`
Add:
\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`
Then:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/myapi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
\`\`\`

**Step 8: Set Environment Variables**
\`\`\`bash
sudo nano /etc/environment
\`\`\`
Add:
\`ConnectionStrings__DefaultConnection=Server=mydb.rds.amazonaws.com;Database=mydb;User Id=admin;Password=123;\`

**Step 9: SSL (HTTPS)**
\`\`\`bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
\`\`\``,
    examples: [
      'ssh -i key.pem ubuntu@your-ec2-ip',
      'dotnet myapi.dll --urls="http://0.0.0.0:5000"',
      'sudo systemctl enable myapi && sudo systemctl start myapi',
      'sudo certbot --nginx -d your-domain.com',
    ],
    keyPoints: [
      'Create EC2: Ubuntu, t2.micro, open ports 22/80/443/5000',
      'SSH with key.pem, install .NET SDK',
      'Upload via SCP or Git clone',
      'Run with dotnet or systemd service (production)',
      'Nginx reverse proxy for production',
      'Certbot for free SSL (HTTPS)',
    ],
  },
  {
    id: 'frontend-deployment',
    title: 'Frontend Deployment 🌐',
    content: `**Step 1: Build Project**
\`npm run build\` or \`npm run build -- --mode production\`
- Output: \`dist/\` folder

**🔷 A. Deploy to Azure Static Web Apps**
1. Go Azure Portal → Create Static Web App
2. Connect GitHub repo
3. Choose:
   - Framework: Vue / React
   - Build location: \`dist\`
   - API location: (optional, if backend is included)
4. GitHub Actions auto-created → pushes trigger auto deploy
5. Result: \`https://myapp.azurestaticapps.net\`

**🔷 B. Deploy to AWS S3 + CloudFront**
1. Create S3 Bucket:
   - Name: \`my-frontend-bucket\`
   - Block public access: OFF
   - Enable static website hosting
   - Index document: \`index.html\`
2. Upload \`dist/\` folder to S3
3. Create CloudFront Distribution:
   - Origin: S3 bucket URL
   - Viewer protocol policy: Redirect HTTP to HTTPS
   - Default root object: \`index.html\`
4. Enable HTTPS (CloudFront auto-provides SSL)
5. Result: \`https://d123456.cloudfront.net\`

**🔷 C. Deploy to Vercel (Easiest for React/Vue)**
1. Push code to GitHub
2. Go vercel.com → Import project
3. Auto-detect framework → Build settings auto-fill
4. Deploy → Result: \`https://myapp.vercel.app\`

**🔷 D. Deploy to Netlify**
1. Go netlify.com → New site from Git
2. Connect GitHub → Select repo
3. Build command: \`npm run build\`
4. Publish directory: \`dist\`
5. Result: \`https://myapp.netlify.app\`

**🔷 E. Deploy to GoDaddy Hosting**
1. Buy hosting plan
2. Access cPanel → File Manager
3. Upload \`dist/\` contents to \`public_html/\`
4. Result: \`https://yourdomain.com\``,
    examples: [
      'npm run build  → dist/ folder',
      'Azure Static Web Apps → Connect GitHub → Auto deploy',
      'Vercel → Import GitHub → Deploy → myapp.vercel.app',
    ],
    keyPoints: [
      'Build with npm run build → dist/ folder',
      'Azure Static Web Apps = easy, auto CI/CD',
      'AWS S3 + CloudFront = static hosting with CDN',
      'Vercel/Netlify = easiest for React/Vue',
      'GoDaddy = upload to public_html/',
    ],
  },
  {
    id: 'database-deployment',
    title: 'Database Deployment 🗄️',
    content: `**🔷 A. Azure SQL Database**
**Step 1: Create SQL Server**
1. Azure Portal → Create SQL Server
2. Fill:
   - Server name: \`mydbserver\`
   - Admin login + password (save securely!)
   - Region: Southeast Asia
   - Allow Azure services: ON

**Step 2: Create Database**
1. SQL Server → Create Database
2. Choose:
   - Database name: \`mydb\`
   - Pricing tier: Basic (free tier) or Standard
   - Collation: SQL_Latin1_General_CP1_CI_AS

**Step 3: Configure Firewall**
- Add your IP for local development
- Add Azure services range: \`0.0.0.0 - 0.0.0.0\`

**Step 4: Get Connection String**
Database → Connection strings → ADO.NET:
\`Server=tcp:mydbserver.database.windows.net,1433;Database=mydb;User Id=admin;Password=yourpassword;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;\`

**Step 5: Test Connection**
Use Azure Data Studio or SSMS to connect

**🔷 B. AWS RDS (MySQL / PostgreSQL)**
**Step 1: Create RDS Instance**
1. AWS Console → RDS → Create Database
2. Choose:
   - Engine: MySQL or PostgreSQL
   - Version: latest stable
   - Template: Free tier
   - DB instance identifier: \`mydb\`
   - Master username + password

**Step 2: Configure Security Group**
- Inbound rules: Allow port 3306 (MySQL) or 5432 (PostgreSQL) from your IP

**Step 3: Get Endpoint**
RDS → Databases → mydb → Endpoint:
\`mydb.abc123.us-east-1.rds.amazonaws.com:3306\`

**Step 4: Connect**
\`mysql -h mydb.abc123.us-east-1.rds.amazonaws.com -u admin -p\`

**Example Connection Strings:**
- **SQL Server:** \`Server=tcp:mydbserver.database.windows.net,1433;Database=mydb;User Id=admin;Password=123;Encrypt=True;\`
- **MySQL:** \`Server=mydb.abc123.us-east-1.rds.amazonaws.com;Database=mydb;User Id=admin;Password=123;\`
- **PostgreSQL:** \`Host=mydb.abc123.us-east-1.rds.amazonaws.com;Port=5432;Database=mydb;Username=admin;Password=123;\``,
    examples: [
      'Server=tcp:mydbserver.database.windows.net,1433;Database=mydb;User Id=admin;Password=123;Encrypt=True;',
      'mysql -h mydb.abc123.us-east-1.rds.amazonaws.com -u admin -p',
    ],
    keyPoints: [
      'Azure SQL: Create Server → Database → Firewall → Connection String',
      'AWS RDS: Create DB → Security Group → Endpoint → Connect',
      'Always Encrypt=True for production',
      'Never hardcode passwords — use env vars',
    ],
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security 🔐 🔥 VERY IMPORTANT',
    content: `**HTTPS / SSL:**
👉 Encrypt data
✔ Azure auto SSL
✔ AWS via Certificate Manager

**JWT Authentication:**
👉 API security
\`[Authorize]\`

**Firewall Rules:**
✔ Open only needed ports
✔ Block public DB access

**Secrets Management:**
👉 Never put password in code ❌
✔ Use: Azure Key Vault, AWS Secrets Manager`,
    examples: [
      '[Authorize]  // JWT authentication',
      'Azure Key Vault / AWS Secrets Manager for secrets',
    ],
    keyPoints: [
      'HTTPS/SSL = Encrypt data',
      'JWT Authentication = API security',
      'Firewall = Open only needed ports, block public DB',
      'Never put password in code — use Key Vault / Secrets Manager',
    ],
  },
  {
    id: 'cicd-automation',
    title: 'CI/CD (Deployment Automation) 🔁 🔥',
    content: `**What?**
👉 Auto deploy code on push

**Flow:**
Code → GitHub Push → Build → Test → Deploy → Cloud

**🔷 GitHub Actions Example (.NET API):**
Create \`.github/workflows/deploy.yml\`:
\`\`\`yaml
name: Deploy .NET API

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0.x'

      - name: Restore dependencies
        run: dotnet restore

      - name: Build
        run: dotnet build --no-restore --configuration Release

      - name: Test
        run: dotnet test --no-build --configuration Release

      - name: Publish
        run: dotnet publish -c Release -o publish

      - name: Deploy to Azure
        uses: azure/webapps-deploy@v2
        with:
          app-name: my-api
          publish-profile: \${{ secrets.AZURE_PUBLISH_PROFILE }}
          package: publish
\`\`\`

**🔷 Setup Steps:**
1. Go to Azure Portal → App Service → Get publish profile
2. GitHub → Repo Settings → Secrets → Add \`AZURE_PUBLISH_PROFILE\`
3. Push to \`main\` branch → Auto triggers build + deploy

**🔷 Other Tools:**
- **Azure DevOps:** Pipelines → Build → Release
- **AWS CodePipeline:** Source → Build (CodeBuild) → Deploy (CodeDeploy)
- **Vercel/Netlify:** Auto deploy on push for frontend`,
    examples: [
      'Push to main → Build → Test → Deploy (fully automatic)',
      'GitHub Secrets for AZURE_PUBLISH_PROFILE',
    ],
    keyPoints: [
      'CI/CD = Auto build, test, deploy on push',
      'GitHub Actions is free and popular',
      'Store secrets in GitHub Secrets',
      'Azure DevOps, AWS CodePipeline also available',
    ],
  },
  {
    id: 'real-world-architecture',
    title: 'Real-World Architecture ⚡',
    content: `**Full System Architecture:**

\`\`\`
Frontend (React/Vue)
        ↓
Backend API (.NET / Java)
        ↓
Database (Azure SQL / AWS RDS)
        ↓
Cloud Hosting (Azure / AWS)
\`\`\``,
    examples: [
      'Frontend → Backend API → Database → Cloud Hosting',
    ],
    keyPoints: [
      'Frontend (React/Vue) → Backend API (.NET/Java) → Database → Cloud',
      'Layered architecture for scalability',
    ],
  },
  {
    id: 'cost-optimization',
    title: 'Cost Optimization 💰',
    content: `✔ Use free tier first
✔ Stop unused VM
✔ Use PaaS instead of IaaS
✔ Optimize DB queries`,
    examples: [],
    keyPoints: [
      'Use free tier first',
      'Stop unused VM',
      'Use PaaS instead of IaaS',
      'Optimize DB queries',
    ],
  },
  {
    id: 'cloud-interview-questions',
    title: 'Interview Questions 🔥',
    content: `**❓ What is cloud computing?**
👉 Internet-based computing resources

**❓ Difference between IaaS and PaaS?**
👉 IaaS = full control
👉 PaaS = easy deployment

**❓ Why use cloud?**
👉 Scalable, cheap, reliable

**❓ What is CI/CD?**
👉 Automated deployment pipeline`,
    examples: [],
    keyPoints: [
      'Cloud computing = Internet-based resources',
      'IaaS = full control, PaaS = easy deployment',
      'Cloud = Scalable, cheap, reliable',
      'CI/CD = Automated deployment pipeline',
    ],
  },
  {
    id: 'cloud-real-world-thinking',
    title: 'Real-World Thinking 🧠',
    content: `**🟢 Use Azure when:**
✔ .NET project
✔ Enterprise system

**🟢 Use AWS when:**
✔ Big scalable system
✔ Microservices

**🟢 Use GoDaddy when:**
✔ Simple website`,
    examples: [],
    keyPoints: [
      'Use Azure for: .NET project, Enterprise system',
      'Use AWS for: Big scalable system, Microservices',
      'Use GoDaddy for: Simple website',
    ],
  },
  {
    id: 'cloud-final-summary',
    title: 'Final Summary 🔥',
    content: `**Cloud = Internet server system**
**Azure = best for .NET**
**AWS = most powerful**
**Deployment = API + Frontend + DB**
**Security = MUST (JWT + SSL)**
**CI/CD = automation 🔥**`,
    examples: [],
    keyPoints: [
      'Cloud = Internet server system',
      'Azure = best for .NET',
      'AWS = most powerful',
      'Deployment = API + Frontend + DB',
      'Security = MUST (JWT + SSL)',
      'CI/CD = automation 🔥',
    ],
  },
];
