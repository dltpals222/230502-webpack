(() => {
  "use strict";
  const e = {
      multiAndSingleTagMaker: function (e, t, n = "", i = 1, a) {
        if (1 === i) {
          if ("string" == typeof n || "number" == typeof n) {
            if ("" === n) {
              const n = document.createElement(t);
              return e.appendChild(n), a && a(n), n;
            }
            {
              const i = document.createElement(t);
              return i.setAttribute("id", n), e.appendChild(i), a && a(i), i;
            }
          }
          if ("object" == typeof n) {
            if (!Array.isArray(n)) {
              const i = document.createElement(t);
              for (let e in n) i.setAttribute(e, n[e]);
              return e.appendChild(i), a && a(i), i;
            }
            if (1 === n.length) {
              const i = document.createElement(t);
              return i.setAttribute("id", n[0]), e.appendChild(i), a && a(i), i;
            }
            n.length > 1 &&
              n.map((n) => {
                const i = document.createElement(t);
                i.setAttribute("id", n), e.appendChild(i);
              });
          }
        } else
          for (let n = 0; n < i; n++) {
            const n = document.createElement(t);
            e.appendChild(n);
          }
      },
      positionEditor: function (e, t, n, i, a) {
        const r = e.style;
        if (((r.position = t), (r.zIndex = n), "object" == typeof i))
          for (let e in i) r[e] = i[e];
        a && a(r);
      },
      fontAndLayoutEditor: function (e, t, n, i, a, r, d) {
        const l = e.style;
        if (
          ((l.width = t),
          (l.height = n),
          (l.backgroundColor = a),
          "1" === i
            ? (l.border = "1px solid black")
            : "string" == typeof i && (l.border = i),
          "string" == typeof r)
        )
          l.fontSize = r;
        else if ("object" == typeof r) for (let e in r) l[e] = r[e];
        d && d(l);
      },
      kingGodFlexEditor: function (e, t, n, i, a) {
        const r = e.style;
        (r.display = "flex"),
          (r.flexDirection = t),
          (r.alignItems = n),
          (r.justifyContent = i),
          a && a(r);
      },
      allMightyStyleEditor: function (e, t, n) {
        let i = e.style;
        if ("object" == typeof t) for (let e in t) i[e] = t[e];
        n && n(e);
      },
    },
    {
      multiAndSingleTagMaker: t,
      positionEditor: n,
      fontAndLayoutEditor: i,
      kingGodFlexEditor: a,
      allMightyStyleEditor: r,
    } = e,
    d = document.getElementById("root"),
    l = {
      mainList: ["", "div", "board-list"],
      mainPage: ["", "div", "number-list-wrap"],
      mainListChild: ["", "div", "", 5],
      mainPageChild: {
        first: ["", "div", "page-down"],
        second: ["", "div", "current-page"],
        third: ["", "div", "page-up"],
      },
      mainPageGrandChild: {
        first: [
          [
            "",
            "a",
            { href: "#", id: "start-number" },
            1,
            (e) => {
              (e.innerText = "<<맨앞"),
                r(e, o),
                e.addEventListener("click", () => {});
            },
          ],
          [
            "",
            "a",
            { href: "#", id: "before-number" },
            1,
            (e) => {
              (e.innerText = "<이전"), r(e, o);
            },
          ],
        ],
        second: ["", "a", "", 1],
        third: [
          [
            "",
            "a",
            { href: "#", id: "next-number" },
            1,
            (e) => {
              (e.innerText = "다음>"), r(e, o);
            },
          ],
          [
            "",
            "a",
            { href: "#", id: "end-number" },
            1,
            (e) => {
              (e.innerText = "맨뒤>>"), r(e, o);
            },
          ],
        ],
      },
    },
    o = {
      "text-decoration": "none",
      color: "black",
      display: "flex",
      justifyContent: "center",
    },
    s = t(d, l.mainList[1], l.mainList[2]),
    c = t(d, l.mainPage[1], l.mainPage[2]),
    h = t(c, l.mainPageChild.first[1], l.mainPageChild.first[2]),
    m = t(c, l.mainPageChild.second[1], l.mainPageChild.second[2]),
    f = t(c, l.mainPageChild.third[1], l.mainPageChild.third[2]),
    g = t(
      h,
      l.mainPageGrandChild.first[0][1],
      l.mainPageGrandChild.first[0][2],
      l.mainPageGrandChild.first[0][3],
      l.mainPageGrandChild.first[0][4]
    ),
    u = t(
      h,
      l.mainPageGrandChild.first[1][1],
      l.mainPageGrandChild.first[1][2],
      l.mainPageGrandChild.first[1][3],
      l.mainPageGrandChild.first[1][4]
    ),
    y = t(
      f,
      l.mainPageGrandChild.third[0][1],
      l.mainPageGrandChild.third[0][2],
      l.mainPageGrandChild.third[0][3],
      l.mainPageGrandChild.third[0][4]
    ),
    p = t(
      f,
      l.mainPageGrandChild.third[1][1],
      l.mainPageGrandChild.third[1][2],
      l.mainPageGrandChild.third[1][3],
      l.mainPageGrandChild.third[1][4]
    );
  a(d, "column", "center", "center"),
    a(s, "column", "center", "center"),
    a(c, "row", "center", "center");
  for (let e = 0; e < c.children.length; e++)
    a(c.children[e], "", "center", "space-evenly"),
      i(c.children[e], "", "", "1", "", "", (e) => {
        e.margin = "2px";
      });
  i(c, "100%", "3%", "1"),
    i(m, "40%", "", "1"),
    a(m, "", "center", "space-evenly");
  let C = { totalDoc: 151, onePageData: 4, currentPage: 21, onePageNumber: 5 };
  const P = Math.ceil(C.totalDoc / C.onePageData),
    b =
      (Math.ceil(C.currentPage / C.onePageNumber),
      Math.ceil(P / C.onePageNumber));
  function v(e) {
    1 === e
      ? ((g.style.visibility = "hidden"), (u.style.visibility = "hidden"))
      : ((g.style.display = "block"), (u.style.display = "block")),
      e === b
        ? ((y.style.visibility = "hidden"), (p.style.visibility = "hidden"))
        : ((y.style.display = "block"), (p.style.display = "block"));
  }
  function E(e) {
    const t = Array.from(h.querySelectorAll("a"));
    let n = e;
    t[1].addEventListener("click", (t) => {
      t.preventDefault(),
        e - (C.onePageNumber - 1) < 0
          ? ((n = 1), G(n))
          : ((n = e - C.onePageNumber), G(n));
    }),
      t[0].addEventListener("click", (e) => {
        e.preventDefault(), G(1);
      });
    const i = Array.from(f.querySelectorAll("a"));
    let a = e;
    i[0].addEventListener("click", (t) => {
      t.preventDefault(),
        e + C.onePageNumber > P
          ? ((a = P), G(a))
          : ((a = e + C.onePageNumber), G(a));
    }),
      i[1].addEventListener("click", (e) => {
        e.preventDefault(), G(P);
      });
  }
  function G(e) {
    for (; m.hasChildNodes(); ) m.removeChild(m.firstChild);
    A(e);
    for (let n = e; n <= e + C.onePageNumber - 1; n++)
      t(
        m,
        l.mainPageGrandChild.second[1],
        l.mainPageGrandChild.second[2],
        l.mainPageGrandChild.second[3],
        (t) => {
          t.setAttribute("data-num", n),
            t.setAttribute("href", "#"),
            (t.innerText = n),
            (t.style.width = "20%"),
            r(t, o);
          let i = 0;
          const a = Array.from(m.querySelectorAll("a"));
          a.map((e) => {
            e.addEventListener("click", (e) => {
              const t = a.indexOf(e.target);
              a.forEach((e, n) => {
                (e.style.fontWeight = n === t ? "bold" : "normal"),
                  (e.style.backgroundColor = n === t ? "#9A6E44" : ""),
                  (e.style.color = n === t ? "white" : "black"),
                  (i = n === t ? parseInt(e.dataset.num) : i);
              }),
                A(i);
            });
          }),
            n === e &&
              ((t.style.fontWeight = "bold"),
              (t.style.backgroundColor = "#9A6E44"),
              (t.style.color = "white")),
            console.log(i);
        }
      ),
        E(e),
        v(e);
  }
  const k = (e) => {
      const t = document.createElement("div");
      return (
        (t.innerHTML = `\n    <span>${e}</span>\n    <span>게시물 제목</span>\n    <span>작성자</span>\n    <span>2022.01.01</span>\n  `),
        t
      );
    },
    A = (e) => {
      for (; s.hasChildNodes(); ) s.removeChild(s.lastChild);
      for (
        let t = (e - 1) * C.onePageData + 1;
        t <= e * C.onePageData && C.totalDoc;
        t++
      )
        s.appendChild(k(t));
    };
  G(C.currentPage);
})();
