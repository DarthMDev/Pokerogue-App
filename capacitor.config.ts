import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.DarthMDev.pokerogue',      
  appName: 'PokeRogue',
  webDir: 'www',

  // --- Online mode: tell Capacitor to load the live site directly ---
  // WKWebView will open this URL instead of www/index.html.
  // We will remove or comment this out when we bundle offline assets.
  server: {
    url: 'https://pokerogue.net',
    cleartext: false,           // HTTPS only — no cleartext HTTP needed
    allowNavigation: [
      'pokerogue.net',
      '*.pokerogue.net',        // Covers any subdomains (auth, api, etc.)
      'discord.com',            // Discord OAuth login flow
      '*.discord.com',
      'discordapp.com',
      '*.discordapp.com',
    ],
  },

  ios: {
    // Keeps WKWebView cookies alive between app launches.
    // Critical so the player stays logged in.
    contentInset: 'never',
    preferredContentMode: 'mobile',
    backgroundColor: '#000000', // Match PokeRogue's black background

    // Allow WKWebView to store cookies & localStorage persistently.
    // Without this, saves/login reset every cold launch.
    scheme: 'pokerogue',        // Custom URL scheme for internal Capacitor calls

    // WKWebView scroll behavior — game handles its own scrolling
    scrollEnabled: false,

    // Liminal handling: keep the WebView alive when app is backgrounded
    // so mid-battle state survives a quick app switch.
    allowsLinkPreview: false,
  },

  plugins: {
    // CapacitorCookies — enables native cookie syncing so login persists
    CapacitorCookies: {
      enabled: true,
    },

    // CapacitorHttp — routes fetch/XHR through native layer,
    // bypasses some CORS quirks WKWebView has with game API calls
    CapacitorHttp: {
      enabled: true,
    },
    //  Inject touch fix into every page load
    WebView: {
        // Prevent iOS gesture recognizers swallowing canvas touch events
        // This is what causes the dpad/buttons to feel unresponsive
        allowsBackForwardNavigationGestures: false,
        scripts: [
            {
                javascript: `
                    (function() {
                        var s = document.createElement('style');
                        s.textContent = [
                            // // Dynamic Island / notch — push game canvas down via CSS only,
                            // // not native insets, so touch coordinates stay aligned
                            // 'body { padding-top: env(safe-area-inset-top, 0px) !important; box-sizing: border-box !important; }',
                            // Fix touch events on canvas buttons
                            'canvas { touch-action: none !important; }',
                            '* { -webkit-tap-highlight-color: transparent; }'
                        ].join(' ');
                        document.head.appendChild(s);
                    })();
                `,
                injectionTime: 'atDocumentEnd',
            }
        ]
    },
    // SplashScreen — hide it fast; the game has its own loading screen
    SplashScreen: {
      launchShowDuration: 800,
      launchAutoHide: true,
      backgroundColor: '#000000',
      androidSplashResourceName: 'splash',
      showSpinner: false,
    },

    // StatusBar — hide it to give the game full screen real estate
    StatusBar: {
      style: 'Dark',
      backgroundColor: '#000000',
      overlaysWebView: false,
    },
  },
};

export default config;
