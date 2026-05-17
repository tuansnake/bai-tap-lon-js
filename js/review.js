const games = [

    {
        id: "valorant",
        name: "VALORANT",
        genre: "FPS",
        rating: 8.5,
        image: "https://www.gamespark.jp/imgs/zoom/404363.jpg"
    },

    {
        id: "genshin",
        name: "GENSHIN IMPACT",
        genre: "RPG",
        rating: 9.0,
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/genshin-impact-main-characters-resting.jpg"
    },

    {
        id: "minecraft",
        name: "MINECRAFT",
        genre: "SANDBOX",
        rating: 9.5,
        image: "https://wallpapers.com/images/file/minecraft-steve-template-ew9r7ewlsbsy2ty6.jpg"
    },

    {
        id: "cyberpunk2077",
        name: "CYBERPUNK 2077",
        genre: "RPG",
        rating: 8.8,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg"
    },
    {
        id: "gta5",
        name: "GTA V",
        genre: "OPEN WORLD",
        rating: 9.7,
        image: "https://i.ytimg.com/vi/MiUnYiXbAk0/maxresdefault.jpg"
    },
    {
        id: "resident_evil",
        name: "RESIDENT EVIL 4",
        genre: "HORROR / SURVIVAL",
        rating: 9.4,
        image: "https://www.residentevil.com/requiem/assets/images/share.jpg"
    },
    {
        id: "te_tu_dan",
        name: "TẾ TỬ ĐÀN",
        genre: "ROGUELIKE / TD",
        rating: 8.8,
        image: "https://tse3.mm.bing.net/th/id/OIP.2Bxh5jsCGKXVXEfpFwZHHgHaDW?pid=ImgDet&w=474&h=214&rs=1&o=7&rm=3"
    },
    {
        id: "palworld",
        name: "PALWORLD",   
            genre: "SURVIVAL / OPEN WORLD / CRAFTING",
        rating: 8.7,
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/palworld-mobile.jpg"
    },
    {
        id: "stardew_valley",
        name: "STARDEW VALLEY",
        genre: "FARMING SIM / RPG",
        rating: 9.8,
        image: "https://stealthygaming.com/wp-content/uploads/2023/05/How-to-fix-the-Bridge-in-Stardew-Valley-1024x576.webp"
    },
    {
        id: "chroma_squad",
        name: "CHROMA SQUAD",
        genre: "FPS / TACTICAL SHOOTER",
        rating: 8.5,
        image: "https://www.savingcontent.com/wp-content/uploads/2018/11/chroma-squad-a-tactical-rpg-that.jpg"
    },
    {
        id: "cs2",
        name: "COUNTER-STRIKE 2",
        genre: "FPS",
        rating: 8.5,
        image: "https://mujsoubor.cz/data/mujsoubor.cz/uploadimages/CS2%20logo.png"
    },
    {
        id: "sf6",
        name: "STREET FIGHTER 6",
        genre: "FIGHTING",
        rating: 9.2,
        image: "https://www.streetfighter.com/6/contents/assets/images/y12-fe/main_visual_pc.jpg"
    },
    {
        id: "diablo4",
        name: "DIABLO IV",
        genre: "ACTION RPG",
        rating: 8.5,
        image: "https://cdn.wccftech.com/wp-content/uploads/2022/08/diablo-iv-HD-scaled.jpg"
    },
    {
        id: "alan_wake_2",
        name: "ALAN WAKE 2",
        genre: "SURVIVAL HORROR / PSYCHOLOGICAL",
        rating: 9.6,
        image: "https://media.vandal.net/m/5-2023/202352518312271_1.jpg"
    },
    {
        id: "elden_ring",
        name: "ELDEN RING",
        genre: "ACTION RPG / SOULSLIKE",
        rating: 9.7,
        image: "https://i.ytimg.com/vi_webp/DvEaa604nPA/maxresdefault.webp"
    },
    {
        id: "wukong",
        name: "BLACK MYTH: WUKONG",
        genre: "ACTION RPG",
        rating: 9.2,
        image: "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-1l4n1.png"
    },
    {
        id: "hollowbody",
        name: "HOLLOWBODY",
        genre: "SURVIVAL HORROR",
        rating: 8.0,
        image: "https://tse2.mm.bing.net/th/id/OIP.88irBn6n2fCEC1bIMRwchAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "rdr2",
        name: "RED DEAD REDEMPTION 2",
        genre: "OPEN WORLD / ACTION",
        rating: 9.9,
        image: "https://img.nerdburglars.net/wp-content/uploads/2023/06/nerdburglars_red_dead_redemption_poster_eb1acf05-fc22-4993-9897-a412663e3d5b.jpg"
    },
    {
        id: "ghost_of_tsushima",
        name: "GHOST OF TSUSHIMA",
        genre: "OPEN WORLD / SAMURAI",
        rating: 9.5,
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-tsushima-master-image-en-24jun21?$native$"
    },
    {
        id: "hogwarts_legacy",
        name: "HOGWARTS LEGACY",
        genre: "OPEN WORLD / WIZARDING WORLD",
        rating: 8.8,
        image: "https://th.bing.com/th/id/R.87769574d78a3c6eef3b6f332771c663?rik=vUwLamHKoFNMYg&pid=ImgRaw&r=0"
    },
    {
        id: "bg3",
        name: "BALDUR'S GATE 3",
        genre: "CRPG / TURN-BASED",
        rating: 9.8,
        image: "https://cdn.wccftech.com/wp-content/uploads/2023/08/Baldurs-Gate-3-header-scaled.jpg"
    },
    {
        id: "helldivers_2",
        name: "HELLDIVERS 2",
        genre: "CO-OP / SHOOTER",
        rating: 8.9,
        image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/07/helldivers-2-escalation-of-freedom.jpg"
    },
    {
        id: "ff7_rebirth",
        name: "FINAL FANTASY VII REBIRTH",
        genre: "ACTION RPG",
        rating: 9.6,
        image: "https://fyre.cdn.sewest.net/ffvii-hub/647875af98774a5fd6673674/ffhub-social-share-2x-1--AFohUebDz.jpg"
    },
    {
        id: "spiderman_2",
        name: "MARVEL'S SPIDER-MAN 2",
        genre: "OPEN WORLD / ACTION",
        rating: 9.3,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/e66c4ae18c5d8e3986a24599b293162a6f5c9eba22968d2c.jpg"
    },
    {
        id: "gow_ragnarok",
        name: "GOD OF WAR RAGNAROK",
        genre: "ACTION ADVENTURE",
        rating: 9.7,
        image: "https://th.bing.com/th/id/R.1cb46cd7bc8bc243c5935fff4d8591f4?rik=JNgIqBqzRuh0rA&pid=ImgRaw&r=0"
    },
    {
        id: "ryza3",
        name: "ATELIER RYZA 3",
        genre: "JRPG / ALCHEMY",
        rating: 8.5,
        image: "https://wallpapercave.com/wp/wp12116698.jpg"
    },
    {
        id: "lies_of_p",
        name: "LIES OF P",
        genre: "ACTION RPG / SOULSLIKE",
        rating: 8.9,
        image: "https://www.famitsu.com/images/000/221/212/y_60a6264b4697a.jpg"
    },
    {
        id: "p3reload",
        name: "PERSONA 3 RELOAD",
        genre: "JRPG",
        rating: 9.4,
        image: "https://personacentral.com/wp-content/uploads/2024/01/P3R-Key-Art-Header.jpg"
    },
    {
        id: "dragons_dogma_2",
        name: "DRAGON'S DOGMA 2",
        genre: "ACTION RPG",
        rating: 8.8,
        image: "https://www.dragonsdogma.com/2/assets/images/topics/240201/thumb.jpg"
    }
    
];

const gamesList = document.getElementById("games-list");

games.forEach(game => {

    gamesList.innerHTML += `

    <a href="game.html?id=${game.id}" class="game-card">

        <img src="${game.image}">

        <div class="game-info">

            <span>${game.genre}</span>

            <h2>${game.name}</h2>

            <p>⭐ ${game.rating}</p>

        </div>

    </a>

    `;

});