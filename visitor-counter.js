// Visitor Counter Logic - Isolated
(function () {
    console.log('Visitor Counter: Initializing...');

    const firebaseConfig = {
        apiKey: "AIzaSyBozv1LaJP4XbKViOT6FdzfdElOxxg4PBE",
        authDomain: "contador-sites.firebaseapp.com",
        projectId: "contador-sites",
        storageBucket: "contador-sites.firebasestorage.app",
        messagingSenderId: "473635400742",
        appId: "1:473635400742:web:e931461ef892e681944ae7"
    };

    // Initialize Firebase only if not already initialized
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
        try {
            firebase.initializeApp(firebaseConfig);
            console.log('Visitor Counter: Firebase Initialized');
        } catch (e) {
            console.error('Visitor Counter: Firebase Init Error', e);
            return;
        }
    } else if (typeof firebase === 'undefined') {
        console.error('Visitor Counter: Firebase SDK not loaded');
        return;
    }

    const db = firebase.firestore();
    const docRef = db.collection('site_stats').doc('visitors');
    const countElement = document.getElementById('visitor-count-display');

    if (!countElement) {
        console.warn('Visitor Counter: Display element not found');
        return;
    }

    // Session Logic: Increment only once per session
    const SESSION_KEY = 'union_dev_visit_logged';
    if (!sessionStorage.getItem(SESSION_KEY)) {
        docRef.update({
            count: firebase.firestore.FieldValue.increment(1)
        }).then(() => {
            console.log('Visitor Counter: Visit logged');
            sessionStorage.setItem(SESSION_KEY, 'true');
        }).catch(err => {
            console.warn('Visitor Counter: Error incrementing', err);
        });
    } else {
        console.log('Visitor Counter: Visit already logged for this session');
    }

    // Real-time Listener
    docRef.onSnapshot((doc) => {
        if (doc.exists) {
            const count = doc.data().count;
            countElement.textContent = count;
            countElement.classList.remove('loading');
            countElement.classList.add('loaded');
        }
    }, (error) => {
        console.warn('Visitor Counter: Error getting document', error);
        countElement.textContent = '---';
    });

})();
