// Array of background image URLs
        var backgrounds = [
    'url(https://64.media.tumblr.com/752e98a41362e1c7e51c7a50a78c179c/745db02de0846cbe-7f/s1280x1920/519e3375acb3b6bf321bb329ae2acc709f32a29c.gif)',
    'url(https://64.media.tumblr.com/bac5c3d9da830185b59e5562c4ac59c6/745db02de0846cbe-e9/s1280x1920/7ed678cbfcc926deead41fbea8b779350aecba41.gif)',
    'url(https://64.media.tumblr.com/bfe90ef1addacef577bc2813d1cfd001/807f9e5a5e0ce538-eb/s1280x1920/5434e6201950f308e365f0e00496bb2e28f624f6.gif)',
    'url(https://64.media.tumblr.com/5d37ab2aa782462c7aa092f7bd0d27cb/2f374d07287b003b-f4/s1280x1920/fe094893d79e09d668e1705e8b9144964f38ce75.gif)',
    'url(https://64.media.tumblr.com/b635cfe2c06478d7d35f4375c4feb813/80afa07eac4f9da7-cd/s1280x1920/0056395e8b86bf785f4d2e9ef56c9ce7f598c14f.gif)',
    'url(https://64.media.tumblr.com/7e646d701b09619cbd7847b65ea580f0/807f9e5a5e0ce538-d1/s1280x1920/163e290a79a60d0a9230eb2e76c4c354d300dbfa.gif)',
    'url(https://64.media.tumblr.com/ea052a3c1f9943081169d31a7d89ae70/e18c8818e61d6da7-5c/s640x960/0d51949c93c10e624c0286076db2fa314f738b3f.gif)',
    'url(https://64.media.tumblr.com/a98bc710b6f5bc7aebb47b3049d7adf8/2f374d07287b003b-d5/s1280x1920/a05c21c6e4fcda302144dba99afb746f83a58e4f.gif)',
    'url(https://64.media.tumblr.com/22cbf4ef8c2f5511249378e53bf61c77/dd157364cccaf039-fa/s1280x1920/249dab13015735f78f1b904deae74aed39a5406d.gif)',
    'url(https://64.media.tumblr.com/6d99b72021a1854e5cd31c8925cf3e1d/b148508426dfdbcf-7a/s1280x1920/975172380da71afeb6924d0d27654dc2a4f09063.gif)',
    'url(https://64.media.tumblr.com/cbcd5ba70270c67dbcc2af1ea9617a82/4e9537cad97cbf25-61/s640x960/b7b17991b01bee77d6afe7066ad57db468e36896.gif)',
    'url(https://64.media.tumblr.com/be9e196e0e59b345a49575020cef444b/4e9537cad97cbf25-b2/s640x960/5a63b0bfd6967ff590fbd06aa905acfba619cfdb.gif)',
    'url(https://64.media.tumblr.com/b40ce84591cf062888daf2ec14c6878c/c33f189f1e1f6e0b-3f/s1280x1920/9105b2bdaeadcc14085a4007893d09f14064ae31.gif)',
    'url(https://64.media.tumblr.com/2244acdfb385ca2c4ba2761ba98f8034/tumblr_pxmcb75ml01xvoqyho1_640.gif)',
    'url(https://64.media.tumblr.com/20e8f4262033360860012669a12efb17/tumblr_p9tn77AgMz1xvoqyho1_640.gif)',
    'url(https://64.media.tumblr.com/389dc5902f7e118071c496c57a986f02/e18c8818e61d6da7-de/s1280x1920/ffa4e160482046d00524d44d4347e41a52372c9b.gif)',
    'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e542269-8836-44b9-a2b7-a39844589af5/ddqegpp-1d948e16-ede9-457e-8e92-00367ca0d3c4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNlNTQyMjY5LTg4MzYtNDRiOS1hMmI3LWEzOTg0NDU4OWFmNVwvZGRxZWdwcC0xZDk0OGUxNi1lZGU5LTQ1N2UtOGU5Mi0wMDM2N2NhMGQzYzQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0enxyWpstm0EZiC-Tz9EPl3GEEvxgIFW0jpgtU7d8ts)',
    'url(https://i.pinimg.com/originals/5f/81/3a/5f813a509c00b8db5fe12f6cda6b4a0d.gif)',
    'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e542269-8836-44b9-a2b7-a39844589af5/dcuq5ay-7f389a5f-28b2-4c8a-94ff-67110bceb6e5.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNlNTQyMjY5LTg4MzYtNDRiOS1hMmI3LWEzOTg0NDU4OWFmNVwvZGN1cTVheS03ZjM4OWE1Zi0yOGIyLTRjOGEtOTRmZi02NzExMGJjZWI2ZTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MDfGvuUl0_f-2NJag0tNh2DG2qZUobIsNk-hyLB2sTI)',
    
];


        // Randomly select a background
        
function changeBackground() {
    var randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = backgrounds[randomIndex] + ' no-repeat bottom left fixed';
    document.body.style.backgroundSize = 'cover';
}

// Call this function to change the background
changeBackground();
