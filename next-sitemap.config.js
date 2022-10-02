/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://indonesia-recovery.vercel.app',
    generateRobotsTxt: true, 
    robotsTxtOptions:{
      additionalSitemaps:[
        'https://indonesia-recovery.vercel.app/sitemap.xml',
        'https://indonesia-recovery.vercel.app/article-sitemap.xml'
      ]
    }
  }