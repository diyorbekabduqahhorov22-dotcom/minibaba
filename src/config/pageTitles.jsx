
export const pageTitles = {
  '/': 'Asosiy panel',
  '/mahsulotlar': 'Mahsulotlar',
  '/buyurtmalar': 'Buyurtmalar',
  '/xabarlar': 'Xabarlar',
  '/statistika': 'Statistika',
};

export const getPageTitle = (pathname) => {
  return pageTitles[pathname] || 'Sahifa';
};