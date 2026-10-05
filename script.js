document.documentElement.classList.add("js");
var PJ = [
  {
    n: "Spotify Clone",
    y: "2026",
    role: "Frontend",
    d: "A Spotify clone with a modern music player interface.",
    t: ["HTML", "CSS", "JavaScript"],
    c: "#1db954",
    m: "shop",
    img: "img/spotify.png",
    link: "https://spotifyclone-sepia-kappa.vercel.app/",
  },
  {
    n: "Todo+",
    y: "2025",
    role: "Product & frontend",
    d: "A calm task manager with tags, keyboard shortcuts and a distraction-free layout.",
    t: ["TypeScript", "Zustand"],
    c: "#ffa98a",
    m: "todo",
    img: "",
    link: "https://todo-list-mu-ecru.vercel.app/",
  },
  {
    n: "WeatherNow",
    y: "2025",
    role: "Frontend",
    d: "Live forecasts presented as a clean, glanceable dashboard.",
    t: ["JavaScript", "REST API"],
    c: "#a9c7ff",
    m: "wx",
    img: "",
    link: "#",
  },
];
var GH_URL = "https://github.com/ajay-mandal12?tab=repositories";
var GH =
  '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
PJ.forEach(function (p) {
  p.gh = p.gh || GH_URL;
});
var M = {
  shop: '<div class="mn"><b>shopflow</b><span>Shop</span><span>New</span><span>Sale</span><u>Cart 2</u></div><div class="hr"><div><span class="mono" style="font-size:9px">Spring collection</span><h4>New season,<br>lighter essentials.</h4><i class="bt">Shop now</i></div><div class="im"></div></div><div class="p3"><div><i></i>Linen shirt<b>$48</b></div><div><i></i>Canvas tote<b>$32</b></div><div><i></i>Field cap<b>$24</b></div></div>',
  todo: '<div class="tw"><div class="sb"><b>Todo+</b><span class="on">Today</span><span>Inbox</span><span>Upcoming</span><span>Done</span></div><div class="ls"><h4>Today <small>3 left</small></h4><div class="tk d"><i></i>Design landing page<em>design</em></div><div class="tk"><i></i>Build the components<em>code</em></div><div class="tk"><i></i>Review pull request</div><div class="tk"><i></i>Deploy to AWS<em>infra</em></div></div></div>',
  wx: '<div class="mn"><b>weathernow</b><span>Today</span><span>Week</span><u>&#9679; Live</u></div><div class="wx"><div><span class="mono" style="font-size:9px">Today</span><h4>24&deg;</h4><p>Sunny with a light breeze</p></div><div class="hh"><i style="height:40%"></i><i style="height:55%"></i><i style="height:80%"></i><i class="n" style="height:100%"></i><i style="height:85%"></i><i style="height:60%"></i><i style="height:45%"></i></div></div><div class="dy"><div>Mon<b>25&deg;</b></div><div>Tue<b>27&deg;</b></div><div>Wed<b>23&deg;</b></div><div>Thu<b>22&deg;</b></div><div>Fri<b>26&deg;</b></div></div>',
};
document.getElementById("cnt").textContent = "0" + PJ.length + " projects";
document.getElementById("stack").innerHTML = PJ.map(function (p, i) {
  return (
    '<article class="proj" style="--i:' +
    i +
    '"><div class="info"><span class="mono">0' +
    (i + 1) +
    " / 0" +
    PJ.length +
    "</span><h3>" +
    p.n +
    "</h3><p>" +
    p.d +
    '</p><div class="tags">' +
    p.t
      .map(function (t) {
        return "<span>" + t + "</span>";
      })
      .join("") +
    '</div><div class="plinks">' +
    '<a class="pl pri" href="' +
    (p.link || "#") +
    '"' +
    (p.link && p.link !== "#"
      ? ' target="_blank" rel="noopener noreferrer"'
      : "") +
    ">Live demo <i>&#8599;</i></a>" +
    '<a class="pl" href="' +
    p.gh +
    '" target="_blank" rel="noopener noreferrer">' +
    GH +
    ' GitHub <i>&#8599;</i></a></div></div><div class="shot" style="background:' +
    p.c +
    '"><div class="win"><div class="tb"><i></i><i></i><i></i><b>' +
    p.n.toLowerCase() +
    ".app</b></div>" +
    (p.img
      ? '<img src="' +
        p.img +
        '" alt="' +
        p.n +
        ' screenshot" loading="lazy" decoding="async">'
      : '<div class="bd">' + M[p.m] + "</div>") +
    "</div></div></article>"
  );
}).join("");

/* reveal */
var io = new IntersectionObserver(
  function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add("in");
        io.unobserve(x.target);
      }
    });
  },
  { threshold: 0.12 },
);
[].forEach.call(document.querySelectorAll(".rv"), function (e) {
  io.observe(e);
});

/* stacking depth */
var cs = [].slice.call(document.querySelectorAll(".proj"));
function stk() {
  if (innerWidth <= 900) return;
  cs.forEach(function (c, i) {
    var n = cs[i + 1];
    if (!n) return;
    var t = n.getBoundingClientRect().top,
      s = innerHeight * 0.9,
      e = 92 + (i + 1) * 22,
      p = Math.max(0, Math.min(1, (s - t) / (s - e)));
    c.style.transform = "scale(" + (1 - p * 0.045) + ")";
  });
}
addEventListener("scroll", stk, { passive: true });
addEventListener("resize", stk);
stk();

/* project reveal */
var po = new IntersectionObserver(
  function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.classList.add("seen");
        po.unobserve(x.target);
      }
    });
  },
  { threshold: 0.2 },
);
[].forEach.call(document.querySelectorAll(".proj,.shot"), function (c) {
  po.observe(c);
});

/* mobile coverflow */
var sk = document.getElementById("stack"),
  dt = document.getElementById("dots");
dt.innerHTML = PJ.map(function (p, i) {
  return '<button aria-label="Show ' + p.n + '" data-i="' + i + '"></button>';
}).join("");
var db = [].slice.call(dt.children);
db.forEach(function (b) {
  b.onclick = function () {
    cs[+b.dataset.i].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };
});
function cf() {
  if (innerWidth > 900) {
    cs.forEach(function (c) {
      c.style.removeProperty("--r");
      c.style.removeProperty("--s");
      c.style.removeProperty("--o");
    });
    return;
  }
  var r = sk.getBoundingClientRect(),
    mid = r.left + r.width / 2,
    best = 0,
    bd = 9;
  cs.forEach(function (c, i) {
    var b = c.getBoundingClientRect(),
      d = Math.max(-1.3, Math.min(1.3, (b.left + b.width / 2 - mid) / b.width)),
      a = Math.abs(d);
    if (a < bd) {
      bd = a;
      best = i;
    }
    c.style.setProperty("--r", -d * 30 + "deg");
    c.style.setProperty("--s", 1 - a * 0.08);
    c.style.setProperty("--o", 1 - a * 0.3);
  });
  db.forEach(function (b, i) {
    b.classList.toggle("on", i == best);
  });
  cs.forEach(function (c, i) {
    c.classList.toggle("act", i == best);
  });
}
sk.addEventListener("scroll", cf, { passive: true });
addEventListener("resize", cf);
cf();
new IntersectionObserver(
  function (es, o) {
    if (es[0].isIntersecting && innerWidth <= 900) {
      sk.classList.add("hint");
      o.disconnect();
    }
  },
  { threshold: 0.6 },
).observe(sk);

/* menu + active link */
var hd = document.querySelector("header"),
  mb = document.getElementById("mb"),
  nl = [].slice.call(document.querySelectorAll("nav a"));
mb.onclick = function () {
  var o = hd.classList.toggle("open");
  mb.setAttribute("aria-expanded", o);
};
nl.forEach(function (a) {
  a.addEventListener("click", function () {
    hd.classList.remove("open");
    mb.setAttribute("aria-expanded", "false");
  });
});
var spy = new IntersectionObserver(
  function (es) {
    es.forEach(function (x) {
      if (x.isIntersecting) {
        nl.forEach(function (a) {
          var on = a.getAttribute("href") == "#" + x.target.id;
          a.classList.toggle("on", on);
          if (on) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
["work", "about", "skills", "contact"].forEach(function (id) {
  spy.observe(document.getElementById(id));
});

function closeMenu() {
  hd.classList.remove("open");
  mb.setAttribute("aria-expanded", "false");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMenu();
});
document.addEventListener("click", function (e) {
  if (!hd.contains(e.target)) closeMenu();
});

/* copy email */
document.getElementById("em").onclick = function () {
  var b = this;
  try {
    navigator.clipboard.writeText("ajaym7883@gmail.com").catch(function () {});
  } catch (e) {}
  b.textContent = "Copied \u2713";
  setTimeout(function () {
    b.textContent = "ajaym7883@gmail.com";
  }, 1800);
};

/* back to top */
document.getElementById("totop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* work: pointer tilt + glare + magnetic buttons (mouse only) */
if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
  [].forEach.call(document.querySelectorAll(".shot"), function (s) {
    s.addEventListener("pointermove", function (e) {
      var r = s.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width,
        y = (e.clientY - r.top) / r.height;
      s.style.setProperty("--ty", (x - 0.5) * 12 + "deg");
      s.style.setProperty("--tx", (0.5 - y) * 10 + "deg");
      s.style.setProperty("--mx", x * 100 + "%");
      s.style.setProperty("--my", y * 100 + "%");
    });
    s.addEventListener("pointerleave", function () {
      s.style.setProperty("--tx", "0deg");
      s.style.setProperty("--ty", "0deg");
    });
  });
  [].forEach.call(document.querySelectorAll(".pl"), function (b) {
    b.addEventListener("pointermove", function (e) {
      var r = b.getBoundingClientRect();
      b.style.setProperty(
        "--bx",
        (e.clientX - r.left - r.width / 2) * 0.2 + "px",
      );
      b.style.setProperty(
        "--by",
        (e.clientY - r.top - r.height / 2) * 0.3 + "px",
      );
    });
    b.addEventListener("pointerleave", function () {
      b.style.setProperty("--bx", "0px");
      b.style.setProperty("--by", "0px");
    });
  });
}

/* ===== 3D carousel (mobile/tablet): smooth drag + inertia ===== */
(function () {
  var n = cs.length,
    pos = 0,
    tgt = 0,
    raf = 0,
    last = 0,
    drag = null,
    didDrag = false,
    cur = -1,
    lock = null;
  function mod(a, m) {
    return ((a % m) + m) % m;
  }
  function layout() {
    if (innerWidth > 900) {
      sk.style.removeProperty("--sh");
      cs.forEach(function (c) {
        c.style.removeProperty("--t");
        c.style.removeProperty("opacity");
        c.style.removeProperty("z-index");
      });
      return;
    }
    var W = cs[0].offsetWidth || 300;
    cs.forEach(function (c, i) {
      var d = mod(i - pos + n / 2, n) - n / 2,
        a = Math.abs(d),
        x = d * W * 0.6,
        z = -Math.min(a, 1.5) * 150,
        r = Math.max(-60, Math.min(60, -d * 34)),
        s = 1 - Math.min(a, 1.5) * 0.06;
      c.style.setProperty(
        "--t",
        "translateX(-50%) translate3d(" +
          x.toFixed(1) +
          "px,0," +
          z.toFixed(1) +
          "px) rotateY(" +
          r.toFixed(1) +
          "deg) scale(" +
          s.toFixed(3) +
          ")",
      );
      c.style.opacity = Math.max(0, 1 - a * 0.4).toFixed(2);
      c.style.zIndex = Math.round(100 - a * 10);
    });
    var k = mod(Math.round(pos), n);
    if (k !== cur) {
      cur = k;
      var cc = document.getElementById("ccount");
      if (cc) cc.textContent = "0" + (k + 1) + " / 0" + n;
      cs.forEach(function (c, i) {
        c.classList.toggle("act", i === k);
      });
      db.forEach(function (b, i) {
        b.classList.toggle("on", i === k);
      });
    }
  }
  function size() {
    if (innerWidth > 900) {
      layout();
      return;
    }
    sk.style.removeProperty("--sh");
    var m = 0;
    cs.forEach(function (c) {
      c.style.position = "relative";
      c.style.height = "auto";
      c.style.setProperty("--t", "none");
      m = Math.max(m, c.offsetHeight);
      c.style.removeProperty("position");
      c.style.removeProperty("height");
    });
    sk.style.setProperty("--sh", m + "px");
    layout();
  }
  /* time-based easing = same smoothness on 60/90/120Hz screens */
  function tick(t) {
    var dt = Math.min(0.05, (t - last) / 1000 || 0.016);
    last = t;
    pos += (tgt - pos) * (1 - Math.exp(-dt * 11));
    if (Math.abs(tgt - pos) < 0.0005) {
      pos = tgt;
      raf = 0;
    } else raf = requestAnimationFrame(tick);
    layout();
  }
  function go(t) {
    tgt = t;
    if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  }
  function goIdx(i) {
    var d = mod(i - Math.round(pos) + n / 2, n) - n / 2;
    go(Math.round(pos) + d);
  }
  db.forEach(function (b) {
    b.onclick = function () {
      goIdx(+b.dataset.i);
    };
  });
  document.getElementById("prev").onclick = function () {
    go(Math.round(tgt) - 1);
  };
  document.getElementById("next").onclick = function () {
    go(Math.round(tgt) + 1);
  };
  sk.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
  sk.addEventListener("pointerdown", function (e) {
    if (innerWidth > 900) return;
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
      tgt = pos;
    }
    drag = {
      x: e.clientX,
      y: e.clientY,
      p: pos,
      lx: e.clientX,
      lt: performance.now(),
      v: 0,
    };
    didDrag = false;
    lock = null;
  });
  sk.addEventListener("pointermove", function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.x,
      dy = e.clientY - drag.y;
    if (!lock) {
      if (Math.abs(dx) < 7 && Math.abs(dy) < 7) return;
      lock = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (lock === "x") {
        didDrag = true;
        try {
          sk.setPointerCapture(e.pointerId);
        } catch (_) {}
      } else {
        drag = null;
        return;
      }
    }
    var unit = cs[0].offsetWidth * 0.5,
      now = performance.now(),
      inst = (e.clientX - drag.lx) / Math.max(1, now - drag.lt);
    drag.v = drag.v * 0.7 + inst * 0.3;
    drag.lx = e.clientX;
    drag.lt = now;
    pos = tgt = drag.p - dx / unit;
    layout();
  });
  function end() {
    if (!drag) return;
    var d = drag;
    drag = null;
    if (lock !== "x") return;
    var unit = cs[0].offsetWidth * 0.5,
      base = Math.round(d.p),
      t = Math.round(pos - ((d.v * 1000) / unit) * 0.2);
    go(Math.max(base - 1, Math.min(base + 1, t)));
  }
  sk.addEventListener("pointerup", end);
  sk.addEventListener("pointercancel", end);
  sk.addEventListener(
    "click",
    function (e) {
      if (innerWidth > 900) return;
      if (didDrag) {
        e.preventDefault();
        e.stopPropagation();
        didDrag = false;
        return;
      }
      var c = e.target.closest(".proj");
      if (!c) return;
      var i = cs.indexOf(c);
      if (i !== cur) {
        e.preventDefault();
        goIdx(i);
      }
    },
    true,
  );
  sk.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") go(Math.round(pos) + 1);
    if (e.key === "ArrowLeft") go(Math.round(pos) - 1);
  });
  addEventListener("resize", size);
  addEventListener("load", size);
  if (innerWidth <= 900)
    cs.forEach(function (c) {
      c.classList.add("seen");
    });
  size();
})();