if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js');
}

// if (window.caches) {
//     caches.open('cache-v1').then((cache) => {
//         cache.addAll(
//             [
//                 './',
//                 './index.html',
//                 './css/styles.css',
//                 './js/app.js',
//                 './pages/division.html',
//                 './pages/multiplicacion.html',
//                 './pages/resta.html',
//                 './pages/suma.html',
//                 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
//                 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
//             ]
//         )
//     })
// }

