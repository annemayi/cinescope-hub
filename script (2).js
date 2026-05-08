/* ===== CineVerse — script.js ===== */

// ── Movie Data ──
const movies = [
  { id:1, title:"Interstellar", year:2014, genre:"Sci-Fi", rating:8.7, director:"Christopher Nolan", cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain"], synopsis:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth becomes uninhabitable.", poster:"https://images.unsplash.com/photo-1534996858221-380b92700493?w=400&h=600&fit=crop" },
  { id:2, title:"Inception", year:2010, genre:"Sci-Fi / Thriller", rating:8.8, director:"Christopher Nolan", cast:["Leonardo DiCaprio","Joseph Gordon-Levitt","Elliot Page"], synopsis:"A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", poster:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop" },
  { id:3, title:"The Dark Knight", year:2008, genre:"Action / Drama", rating:9.0, director:"Christopher Nolan", cast:["Christian Bale","Heath Ledger","Aaron Eckhart"], synopsis:"When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", poster:"https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop" },
  { id:4, title:"Avengers: Endgame", year:2019, genre:"Action / Sci-Fi", rating:8.4, director:"Anthony & Joe Russo", cast:["Robert Downey Jr.","Chris Evans","Scarlett Johansson"], synopsis:"After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.", poster:"https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop" },
  { id:5, title:"Parasite", year:2019, genre:"Thriller / Drama", rating:8.5, director:"Bong Joon-ho", cast:["Song Kang-ho","Lee Sun-kyun","Cho Yeo-jeong"], synopsis:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", poster:"https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop" },
  { id:6, title:"Spider-Man: No Way Home", year:2021, genre:"Action / Adventure", rating:8.2, director:"Jon Watts", cast:["Tom Holland","Zendaya","Benedict Cumberbatch"], synopsis:"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds begin to appear.", poster:"https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=400&h=600&fit=crop" }
];

const genres = ["Sci-Fi","Action","Thriller","Drama","Horror","Comedy","Romance","Animation","Fantasy","Documentary"];

// ── State ──
let showAll = false;
let selectedRating = 0;
let hoverRating = 0;
const reviews = [
  { name:"Alex", rating:5, comment:"Interstellar blew my mind! The visuals and soundtrack are unmatched." },
  { name:"Jordan", rating:4, comment:"Inception keeps you thinking for days. A masterpiece of storytelling." }
];

// ── Helpers ──
function scrollTo(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior:"smooth" });
  document.getElementById("mobileMenu")?.classList.remove("open");
}

function starSVG(filled, size) {
  size = size || 16;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="'+(filled?"currentColor":"none")+'" stroke="currentColor" stroke-width="2" class="'+(filled?"star-filled":"star-empty")+'"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
}

function starsHTML(rating, max, size) {
  max = max || 5; size = size || 16;
  let h = '';
  for (let i = 1; i <= max; i++) h += starSVG(i <= rating, size);
  return '<div class="stars">' + h + '</div>';
}

// ── Navbar scroll ──
window.addEventListener("scroll", function() {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
  const btn = document.getElementById("backToTop");
  btn.classList.toggle("visible", window.scrollY > 400);
});

function toggleMobile() {
  document.getElementById("mobileMenu").classList.toggle("open");
}

// ── Gallery ──
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const list = showAll ? movies : movies.slice(0, 3);
  grid.innerHTML = list.map(function(m) {
    return '<article class="movie-card card-glow" onclick="openModal('+m.id+')">' +
      '<div class="poster-wrap">' +
        '<img src="'+m.poster+'" alt="'+m.title+'" loading="lazy" width="400" height="256" />' +
        '<div class="poster-overlay"></div>' +
        '<div class="badges"><span class="badge-rating">'+m.rating+'</span><span class="badge-genre">'+m.genre+'</span></div>' +
      '</div>' +
      '<div class="info"><h3>'+m.title+'</h3><p>'+m.year+' &bull; '+m.director+'</p></div>' +
    '</article>';
  }).join('');
  document.getElementById("showMoreBtn").textContent = showAll ? "Show Less" : "Show More Movies";
}

function toggleShowMore() {
  showAll = !showAll;
  renderGallery();
}

// ── Modal ──
function openModal(id) {
  var m = movies.find(function(x){return x.id===id});
  if (!m) return;
  var stars = Math.round(m.rating / 2);
  document.getElementById("modalBody").innerHTML =
    '<img class="modal-poster" src="'+m.poster+'" alt="'+m.title+'" />' +
    '<div class="modal-info">' +
      '<h2>'+m.title+'</h2>' +
      '<div class="meta"><span class="tag">'+m.genre+'</span><span>'+m.year+'</span>'+starsHTML(stars)+'<span class="gold-score">'+m.rating+'/10</span></div>' +
      '<p class="synopsis">'+m.synopsis+'</p>' +
      '<p class="detail-label">Director</p><p class="detail-value">'+m.director+'</p>' +
      '<p class="detail-label">Cast</p><p class="detail-value">'+m.cast.join(", ")+'</p>' +
    '</div>';
  document.getElementById("movieModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("movieModal").style.display = "none";
}

document.addEventListener("keydown", function(e) { if (e.key === "Escape") closeModal(); });

// ── Star Picker ──
function renderStarPicker() {
  var el = document.getElementById("starPicker");
  var h = '';
  for (var i = 1; i <= 5; i++) {
    h += '<button type="button" onmouseenter="hoverStar('+i+')" onmouseleave="hoverStar(0)" onclick="pickStar('+i+')">'+starSVG(i <= (hoverRating || selectedRating), 28)+'</button>';
  }
  el.innerHTML = h;
}

function hoverStar(n) { hoverRating = n; renderStarPicker(); }
function pickStar(n) { selectedRating = n; hoverRating = 0; renderStarPicker(); }

// ── Reviews ──
function renderReviews() {
  var el = document.getElementById("reviewList");
  el.innerHTML = reviews.map(function(r) {
    return '<article class="review-item card-glow"><div class="review-header"><h4>'+r.name+'</h4>'+starsHTML(r.rating,5,14)+'</div><p>'+r.comment+'</p></article>';
  }).join('');
}

function submitReview() {
  var name = document.getElementById("reviewName").value.trim();
  var comment = document.getElementById("reviewComment").value.trim();
  var msg = document.getElementById("formMsg");
  if (!name || !comment || selectedRating === 0) {
    msg.innerHTML = '<p class="form-error">Please fill in all fields and select a rating.</p>';
    return;
  }
  reviews.unshift({ name:name, rating:selectedRating, comment:comment });
  document.getElementById("reviewName").value = '';
  document.getElementById("reviewComment").value = '';
  selectedRating = 0;
  renderStarPicker();
  renderReviews();
  msg.innerHTML = '<p class="form-success fade-in">✓ Review submitted successfully!</p>';
  setTimeout(function(){ msg.innerHTML=''; }, 3000);
  document.getElementById("charCount").textContent = "(0/300)";
}

document.getElementById("reviewComment").addEventListener("input", function() {
  document.getElementById("charCount").textContent = "("+this.value.length+"/300)";
});

// ── Genres ──
function renderGenres() {
  document.getElementById("genreTags").innerHTML = genres.map(function(g) {
    return '<span class="genre-tag">'+g+'</span>';
  }).join('');
}

// ── Init ──
document.getElementById("year").textContent = new Date().getFullYear();
renderGallery();
renderStarPicker();
renderReviews();
renderGenres();
