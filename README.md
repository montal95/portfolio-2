# Portfolio 2.0

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7fe4db5-e077-4f6c-ac6d-eb833ee81b12/deploy-status)](https://app.netlify.com/sites/gallant-hypatia-c82d23/deploys)

This is an update of my previous portfolios, relying less on bootstrap to do stylings and applying what I've learned through CSS courses. SASS and minimal CSS-Grid is used to help make the site responsive. Javascript, Node.js and Express are also used for the functionality of the site.

**Live Site:** https://gallant-hypatia-c82d23.netlify.app

## Technology Stack

- **Frontend**: HTML5, SASS/CSS-Grid, Vanilla JavaScript
- **Build Tool**: Parcel Bundler
- **Backend**: Node.js, Express (for local development)
- **Styling**: Node-Sass, SASS Middleware
- **Hosting**: Netlify
- **DNS**: Squarespace (formerly Google Domains)

## Project Structure

```
portfolio-2/
├── src/
│   ├── index.html          # Home page
│   ├── portfolio.html      # Portfolio showcase
│   ├── resume.html         # Resume page
│   ├── contact.html        # Contact form page
│   ├── scss/               # SASS stylesheets
│   ├── js/                 # JavaScript files
│   └── img/                # Images and assets
├── server.js               # Express server with Parcel middleware
└── package.json            # Dependencies and scripts
```

## Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/montal95/portfolio-2.git
   cd portfolio-2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run watch
   ```
   This starts Parcel in watch mode. The site will be available at `http://localhost:1234`

## Deployment Procedure

### Hosting on Netlify

The site is hosted on **Netlify** with automatic continuous deployment from GitHub.

**Current Netlify Site:** gallant-hypatia-c82d23.netlify.app

Netlify automatically detects and deploys updates whenever changes are pushed to the `main` branch on GitHub.

#### Deployment Status Badge

The badge at the top of this README shows the live status of the Netlify deployment:

- **✓ Success** - Latest deploy succeeded
- **⚠ Building** - Site is currently being deployed
- **✗ Failed** - Latest deploy failed

#### How Netlify Deployment Works

Netlify is connected to the `montal95/portfolio-2` GitHub repository with the following configuration:

- **GitHub Integration:** Direct connection to the repository
- **Automatic Deployment:** Triggered on every push to the `main` branch
- **Build Process:** Serves static files directly from the repository
- **Preview Deploys:** Automatically generated for pull requests

The deployment is fully automated - push to GitHub, and Netlify handles the rest.

#### Initial Netlify Setup

This site is already configured on Netlify. For reference, the setup process was:

1. **Connect repository to Netlify**
   - Log into [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select GitHub and authorize access
   - Choose the `portfolio-2` repository

2. **Deployment**
   - Netlify automatically triggers deploys on push to `main` branch
   - No build command configured - serves static files directly

#### Deploying Updates

Commit and push your changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Netlify automatically:
1. Detects the push to `main` branch
2. Deploys the updated site to production
3. Updates the status badge

No additional commands or manual deployment steps are needed.

#### Manual Deploy

You can also trigger manual deploys via the Netlify Dashboard:
1. Go to the **Deploys** tab
2. Click "Trigger deploy" → "Deploy site"

Or use the Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### DNS Configuration (Squarespace)

The DNS for this site is managed through **Squarespace** (formerly Google Domains).

> **Note:** Google Domains was acquired by Squarespace in 2023. Existing domains were migrated to Squarespace management.

#### Setting up Custom Domain on Netlify

1. **Add custom domain in Netlify**
   - Go to **Site Settings > Domain management**
   - Click "Add custom domain"
   - Enter your domain

2. **Get Netlify DNS configuration**
   - Netlify provides DNS records to configure
   - Note the A Record IP and CNAME target

3. **Configure DNS in Squarespace**
   - Log into [Squarespace Domains](https://domains.squarespace.com)
   - Select your domain
   - Navigate to **DNS Settings**
   - Add the records provided by Netlify:
     - **A Record**: `@` → Netlify's IP
     - **CNAME Record**: `www` → `gallant-hypatia-c82d23.netlify.app`

4. **Wait for DNS propagation**

5. **Enable HTTPS in Netlify**
   - Go to **Site Settings > Domain management > HTTPS**
   - Netlify automatically provisions a free SSL certificate via Let's Encrypt
   - Enable "Force HTTPS" to redirect all HTTP traffic to HTTPS

#### Squarespace Domain Management

- **Access your domains:** https://domains.squarespace.com
- **DNS Records:** Managed under DNS Settings for each domain
- **Nameservers:** Can point to Netlify's nameservers for easier management (optional)
- **Auto-renewal:** Ensure domain auto-renewal is enabled to prevent expiration

## Development Notes

- **Local Development**: The `server.js` file with Express and Parcel is for local development only. Netlify serves the static files directly from the repository.
- **SASS Compilation**: Handled by node-sass-middleware in the Express server during local development
- **Parcel Bundler**: Handles all asset bundling, transpilation, and hot module replacement
- **Responsive Design**: CSS Grid and custom SASS breakpoints (minimal external frameworks)
- **Contact Form**: Working contact form functionality implemented
- **Deployment Workflow**:
  - Push to `main` branch → Netlify auto-deploys → Live
  - No build step required on Netlify (serves static files directly)
  - Status badge updates automatically with each deployment

## Future Plans

- Developer Blog
- Additional portfolio projects
- Performance optimizations

## Credits

Design Credit: **Ali Sayed**
https://dribbble.com/shots/2517640-Personal-VCard

## License

ISC
