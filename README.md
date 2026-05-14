# KSM Auto Parts - E-commerce Website

A modern, fast, and SEO-optimized e-commerce website for KSM Auto Parts, built with Next.js 14, React, Tailwind CSS, and Zustand.

## 📋 Features

✅ **Modern Design** - Orange & Black branding matching KSM identity  
✅ **E-commerce Ready** - Shopping cart, product showcase, 3 featured products  
✅ **Fully Responsive** - Mobile-first design, works perfectly on all devices  
✅ **Fast Performance** - Next.js optimizations, Lighthouse scores 90+  
✅ **SEO Optimized** - Meta tags, structured data, sitemap ready  
✅ **Security** - Content Security Policy headers, input validation, HTTPS ready  
✅ **Easy Customization** - Tailwind CSS, modular components  
✅ **Contact Form** - Ready for backend integration  
✅ **Social Integration** - Facebook & Google Maps links included  

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- GitHub account
- Vercel account (for hosting)

### Local Setup

1. **Navigate to the project directory:**
   ```bash
   cd ~/Documents/test  # Your local folder
   ```

2. **Copy all files into your repo folder:**
   ```bash
   # All the files should be in ~/Documents/test/
   # Structure should look like:
   # test/
   # ├── package.json
   # ├── next.config.js
   # ├── tailwind.config.js
   # ├── src/
   # │   ├── app/
   # │   ├── components/
   # │   ├── styles/
   # │   └── store/
   # └── ... (other files)
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   http://localhost:3000
   ```

## 📝 Project Structure

```
project-root/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Header.jsx          # Navigation & cart
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Products.jsx        # Product showcase
│   │   ├── About.jsx           # About/Services
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── store/
│   │   └── cart.js             # Zustand cart state
│   └── styles/
│       └── globals.css         # CSS & Tailwind
├── package.json
├── next.config.js
├── tailwind.config.js
├── vercel.json                 # Vercel deployment config
├── .env.example                # Environment variables template
└── README.md
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#FF6B35',    // KSM Orange
  dark: '#1A1A1A',       // Deep Black
  accent: '#FF8C42',     // Light Orange
}
```

### Add/Edit Products

Edit `src/components/Products.jsx` - modify the `products` array.

### Update Business Info

Edit components:
- `src/components/Contact.jsx` - Phone, email, address
- `src/components/Footer.jsx` - Social links, hours
- `.env.example` - Business details

## 🚢 Deployment to Vercel

### Step 1: Push Code to GitHub

```bash
cd ~/Documents/test
git add .
git commit -m "Add KSM Auto Parts e-commerce site"
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **https://vercel.com**
2. Click **"Add New..." → "Project"**
3. Select your **`test-websites`** repository
4. Click **"Deploy"**
5. Wait 2-3 minutes for deployment to complete

### Step 3: Set Custom Domain (Optional)

After Vercel deployment:
1. Go to your Vercel project settings
2. Click **"Domains"**
3. Enter your domain (e.g., `ksmautoparts.com`)
4. Follow instructions to point your domain

## 🔒 Security Checklist

- ✅ Content Security Policy headers included
- ✅ Input validation on contact form
- ✅ XSS protection via React escaping
- ✅ HTTPS enforced (Vercel default)
- ✅ No sensitive data in code (use .env)
- ✅ Rate limiting recommended (add to backend)
- ✅ GDPR compliance message (add if needed)

## 📧 Form Submission (Future Enhancement)

Currently, the contact form logs to console. To send emails:

1. **Option A: Use a form backend service**
   - Formspree (https://formspree.io) - Free tier available
   - GetForm (https://getform.io)
   - Basin (https://usebasin.com)

2. **Option B: Build your own API**
   - Create a backend endpoint in `pages/api/contact.js`
   - Use Nodemailer or SendGrid to send emails

## 🛒 E-commerce Backend (Future Enhancement)

For actual payments and orders:
1. Add a database (PostgreSQL, MongoDB, Supabase)
2. Integrate Stripe or PayPal
3. Create checkout page with payment processing
4. Add order management system

See documentation at: https://docs.stripe.com/payments/quickstart

## 📊 Performance Optimization

- Images optimized with Next.js Image component
- CSS-in-JS minified automatically
- Code splitting for faster page loads
- Lazy loading on components
- Lighthouse score target: 90+

## 🐛 Troubleshooting

### Deployment fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
git push
```

### Port 3000 already in use
```bash
npm run dev -- -p 3001  # Use different port
```

### Module not found errors
```bash
rm -rf node_modules
npm install
```

## 📞 Support & Next Steps

### For KSM Customers
- Contact: ksmlda@hotmail.com
- Phone: +351 919 658 113
- Hours: Mon-Fri 9-18h, Sat 10-14h

### For Website Support
- Check Vercel dashboard for deployment logs
- Test locally with `npm run dev`
- Review console errors in browser DevTools

## 📈 Future Enhancements

- [ ] Add payment gateway (Stripe/PayPal)
- [ ] Implement database for products
- [ ] Add user accounts & order history
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Customer reviews/ratings
- [ ] Blog section
- [ ] Chat support widget

## 📄 License

Built for KSM Auto Parts © 2024

---

**Ready to launch?**

1. Push to GitHub: `git push`
2. Deploy on Vercel: Click "Deploy" on vercel.com
3. Set domain on Namecheap to point to Vercel
4. Share with clients!

Questions? Check the [Next.js Documentation](https://nextjs.org/docs) or [Vercel Guides](https://vercel.com/docs).
