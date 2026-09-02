const assetUrl = (fileName: string) => {
  const normalizedPath = fileName.replace(/\\/g, '/');
  return new URL(`../public/${encodeURI(normalizedPath)}`, import.meta.url).href;
};

export const partnerLogos = [
  { id: 'jireh', name: 'JIREH', url: assetUrl('JIREH.jpg') },
  { id: 'fuji', name: 'FujiFilm', url: assetUrl('fuji.png') },
  { id: '3e-ndt', name: '3E NDT', url: assetUrl('logo4.png') },
  { id: 'durr-ndt', name: 'DURR NDT', url: assetUrl('DUR.jpg') },
  { id: 'danatronics', name: 'DANATRONICS', url: assetUrl('logo.jpg') },
  { id: 'ekoscan', name: 'EKOSCAN', url: assetUrl('EKOSCAN.jpg') },
  { id: 'proceq', name: 'PROCEQ', url: assetUrl('PROCEQ.png') },
  { id: 'vallen-systeme', name: 'VALLEN SYSTEME', url: assetUrl('Vallen-Logo.png') },
  { id: 'rohmann', name: 'ROHMANN', url: assetUrl('ROHMANN.jpg') },
  { id: 'mitcorp', name: 'MITCORP', url: assetUrl('MITCORP.jpg') },
  { id: 'gb-inspection', name: 'GB INSPECTION', url: assetUrl('GB.jpg') },
  { id: 'wohler', name: 'WOHLER', url: assetUrl('WOHLER.jpg') },
  { id: 'johnson-allen', name: 'JOHNSON & ALLEN', url: assetUrl('JOHNSON.jpg') },
  { id: 'echo', name: 'ECHO ULTRASONICS', url: assetUrl('ECHO.jpg') },
  { id: 'spectro', name: 'SPECTRO', url: assetUrl('Spectro_UV_transparent_logo.avif') },
  { id: 'dolphitech', name: 'DOLPHITECH', url: assetUrl('Picture1.png') },
  { id: 'balteau', name: 'BALTEAU NDT', url: assetUrl('BALTEAU.jpg') },
];