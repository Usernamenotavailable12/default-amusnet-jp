(function () {
  var t,
      e,
      i,
      s,
      r,
      n,
      a,
      o,
      l,
      h,
      p,
      u,
      c,
      _ = !1;
  testRandom = !1;
  var f,
      d,
      m,
      g = {
          LargestWinner: {
              EN: "Largest Winner",
              RU: "Самый большой победитель:",
              DE: "Größte Gewinner",
              RO: "Cel mai mare câștigător",
              TR: "Büyük galibi",
              PL: "Największy zwycięzca",
              NL: "Grootste winnaar",
              SV: "Största vinnare",
              NO: "Største vinner",
              HU: "A legnagyobb nyertes",
              SL: "Največji zmagovalec",
              SK: "Najväčší víťaz",
              LV: "Lielākais uzvarētājs",
              DK: "Største vinder",
              FR: "Grand gagnant",
              MK: "Најголем добитник",
          },
          NumberOfWinners: {
              EN: "Number of  winners:",
              RU: "Количество победителей:",
              DE: "Größte Gewinner",
              RO: "Număr de câștigători",
              TR: "Galip sayısı",
              PL: "Liczba zwycięzców",
              NL: "Aantal winnaars",
              SV: "Antal vinnare",
              NO: "Antall vinnere",
              HU: "Száma nyertesek",
              SL: "Število zmagovalcev",
              SK: "Počet víťazov",
              LV: "Vairāki uzvarētāji",
              DK: "Antallet af vindere",
              FR: "Nombre de gagnants",
              MK: "Број на добитници",
          },
          LastWinner: {
              EN: "Last Winner:",
              RU: "Последний победитель:",
              DE: "Größte Gewinner",
              RO: "Ultimul câștigător",
              TR: "Son kazanan",
              PL: "Ostatni zwycięzca",
              NL: "Laatste winnaar",
              SV: "Senaste vinnare",
              NO: "Siste vinner",
              HU: "Utolsó győztes",
              SL: "Zadnji zmagovalec",
              SK: "Posledný víťaz",
              LV: "Pēdējais uzvarētājs",
              DK: "Sidste vinder",
              FR: "Dernier gagnant",
              MK: "Последен добитник",
          },
      },
      v = "",
      y = [],
      x = [],
      b = [],
      T = 0,
      w = { LargestWinner: "", DateOfLargestWin: "", NumberOfWinners: "", LastWinner: "", DateOfLastWinner: "", LastWinnerAmount: "", Currency: "" },
      P = { LargestWinner: "", DateOfLargestWin: "", NumberOfWinners: "", LastWinner: "", DateOfLastWinner: "", LastWinnerAmount: "", Currency: "" },
      k = { LargestWinner: "", DateOfLargestWin: "", NumberOfWinners: "", LastWinner: "", DateOfLastWinner: "", LastWinnerAmount: "", Currency: "" },
      S = { LargestWinner: "", DateOfLargestWin: "", NumberOfWinners: "", LastWinner: "", DateOfLastWinner: "", LastWinnerAmount: "", Currency: "" };
  ($.support.cors = !0), $.ajaxSetup({ cache: !1 });
  var C = document.all && !document.addEventListener,
      I = document.all && !window.atob;
  function L() {
      var t = e.width();
      const i = document.getElementById("com-egt-jackpot-html-jackpotBanner").className;
      e.removeClass(),
          t < h && e.toggleClass("com-egt-jackpot-html-xsm"),
          t >= h && t < p && e.toggleClass("com-egt-jackpot-html-sm"),
          t >= p && t < u && e.toggleClass("com-egt-jackpot-html-md"),
          t >= u && t < c && e.toggleClass("com-egt-jackpot-html-lg"),
          t >= c && e.toggleClass("com-egt-jackpot-html-xlg");
      const s = document.getElementById("com-egt-jackpot-html-jackpotBanner").className;
      if (i !== s && _) {
          D();
          const t = "com-egt-jackpot-html-".length,
              e = s.substring(t);
          f.newSize(e);
      }
  }
  function R() {
      f.hideAllPopups(), L();
      for (var t = 0; t < b.length; t++) (b.isPopUpOpen = !1), b[t].setClickableArea();
      void 0 !== o || b[0].box.width > o ? f.updatePopUpWidth(b[0].box.width) : f.updatePopUpWidth(o);
  }
  function D() {
      const t = document.getElementById("com-egt-jackpot-html-jackpotBanner"),
          e = [document.getElementsByClassName("com-egt-jackpot-html-clear-fix")[0], document.getElementsByClassName("com-egt-jackpot-html-popUpMask")[0]],
          i = ["I", "II", "III", "IV"],
          s = (t) => "com-egt-jackpot-html-box com-egt-jackpot-html-NUMBER com-egt-jackpot-html-equal".replace("NUMBER", i[t]),
          r = {
              "com-egt-jackpot-html-xsm": [4, 3, 2, 1],
              "com-egt-jackpot-html-sm": [4, 3, 2, 1],
              "com-egt-jackpot-html-md": [4, 3, 2, 1],
              "com-egt-jackpot-html-lg": [4, 3, "logo", 2, 1],
              "com-egt-jackpot-html-xlg": [4, 3, "logo", 2, 1],
          }[document.getElementById("com-egt-jackpot-html-jackpotBanner").className];
      let n = document.getElementsByClassName("com-egt-jackpot-html-logo");
      for (let e = 0; e < r.length; e++)
          if ("logo" === r[e]) t.append(n[0], n[1]);
          else {
              let i = document.getElementsByClassName(s(r[e] - 1))[0];
              t.append(i);
          }
      e.forEach((e) => {
          t.appendChild(e);
      });
  }
  (EgtJackpotComponent = (function () {
      function O(g) {
          if (
              ((this.first = !0),
              (this.onMouseleave = !1),
              (g.logo = !0),
              (g.autoUpdate = !0),
              (g.logoPopUp = !1),
              (g.boxWidthEqual = !0),
              (g.levelSize = 40),
              (g.currencyLineHeight = 9),
              (g.currencyFontSize = 10),
              (g.currencyPaddingTop = 9),
              (g.boxHeight = 46),
              (g.boxLogoHeight = 69),
              (g.boxPadding = 10),
              (g.borderWidth = 1),
              (g.borderRadius = 6),
              (g.borderColor = "#cdae45"),
              (g.dateColor = "#ffffff"),
              (g.lastWinnerUsernameColor = "#ffffff"),
              (g.popUpBoxPosition = "bottom"),
              (g.popUpBoxBackground = "#000000"),
              (g.popUpBoxWidth = 300),
              (g.buttonURL = ""),
              (g.buttonText = "Play now!"),
              (g.buttonWidth = 150),
              (g.buttonHeight = 30),
              (g.buttonBackground = "#ff8000"),
              (g.buttonBorderColor = "#ff0000"),
              (g.buttonColor = "#ffffff"),
              (t = g.URL),
              (e = $("#com-egt-jackpot-html-jackpotBanner")),
              (i = "/"),
              (s = g.lang),
              (r = g.requestInterval),
              (a = g.popUpBoxPosition),
              (o = g.popUpBoxWidth),
              (n = g.autoUpdate),
              (h = g.xtra_small),
              (p = g.small),
              (u = g.medium),
              (c = g.large),
              (this.resourceURL = ""),
              void 0 !== g.resourceURL && g.resourceURL && g.resourceURL.length > 0 && (this.resourceURL = g.resourceURL + "/"),
              (this.resourceURL = this.resourceURL.replace(/\/+$/gim, "/")),
              C)
          )
              return (l = "Oops your browser is not supported!"), void this.appendIE8Box(g.boxHeight);
          if ((L(), this.Club, this.Diamond, this.Heart, this.Spade, g.logo))
              if (g.redirectURL) {
                  const t = this.createLink(e)
                      .addClass("com-egt-jackpot-html-logo com-egt-jackpot-html-mobile")
                      .css({ height: g.boxLogoHeight + "px", textAlign: "center" });
                  this.createLogoImg(t).attr("href", g.redirectURL);
              } else
                  this.createDiv(e)
                      .addClass("com-egt-jackpot-html-logo com-egt-jackpot-html-mobile")
                      .css({ height: g.boxLogoHeight + "px" });
          if (((this.Spade = new RollingComponent(e, "IV", g, { maxDigits: g.maxDigits[3] })), (this.Heart = new RollingComponent(e, "III", g, { maxDigits: g.maxDigits[2] })), g.logo))
              if (g.redirectURL) {
                  const t = this.createLink(e)
                      .addClass("com-egt-jackpot-html-logo")
                      .css({ height: g.boxLogoHeight + "px", textAlign: "center" });
                  this.createLogoImg(t).attr("href", g.redirectURL);
              } else
                  this.createDiv(e)
                      .addClass("com-egt-jackpot-html-logo")
                      .css({ height: g.boxLogoHeight + "px" });
          (this.Diamond = new RollingComponent(e, "II", g, { maxDigits: g.maxDigits[1] })),
              (this.Club = new RollingComponent(e, "I", g, { maxDigits: g.maxDigits[0] })),
              this.createDiv(e).addClass("com-egt-jackpot-html-clear-fix"),
              g.buttonURL &&
                  e.append(
                      $("<a></a>")
                          .attr({ href: g.buttonURL, alt: g.buttonText })
                          .addClass("com-egt-jackpot-html-button")
                          .css({ color: g.buttonColor, backgroundColor: g.buttonBackground, borderColor: g.buttonBorderColor, width: g.buttonWidth, height: g.buttonHeight, lineHeight: g.buttonHeight + "px" })
                          .html(g.buttonText)
                  ),
              (f = void 0 !== o || this.Club.box.outerWidth() > o ? new PopUp(e, g, this.Club.box.outerWidth()) : new PopUp(e, g, o)).visible(!1),
              (d = f.generateArrow(7, g.popUpBoxBackground, g.popUpBoxPosition, "50%", g.borderWidth, g.borderColor)),
              (m = "left" == a && e.width() >= h ? g.levelSize / 2 + g.borderWidth : 0),
              (borderWidth = g.borderWidth),
              b.push(this.Club),
              b.push(this.Diamond),
              b.push(this.Heart),
              b.push(this.Spade);
          for (var v = 0; v < 4; v++)
              b[v].visible(!0),
                  (b[v].isPopUpOpen = !1),
                  b[v].append(),
                  I && b[v].level.css({ left: 0 }),
                  "ontouchstart" in window ? b[v].box.on("touchstart", { self: this, target: b[v] }, this.showPopUp) : b[v].dummyImg.map.area.on("mouseenter", { self: this, target: b[v] }, this.showPopUp);
          this.getLanguage(), this.getJackpot(t), (_ = !0), D();
          const y = document.getElementById("com-egt-jackpot-html-jackpotBanner").className,
              x = "com-egt-jackpot-html-".length;
          let T = y.substring(x);
          f.newSize(T);
      }
      return (
          (O.prototype.getLanguage = function () {
              var t = this;
              $.ajax({
                  url: t.resourceURL + "Languages.xml",
                  cache: !1,
                  type: "get",
                  crossDomain: !0,
                  dataType: "xml",
                  contentType: "application/xml; charset=utf-8",
                  success: function (e) {
                      t.setLanguage(e);
                  },
                  error: function () {
                      t.setLanguageFromDefaultJson(g);
                  },
              });
          }),
          (O.prototype.setLanguage = function (t) {
              console.log(t);
              var e = $(t).find("Language"),
                  i = e.find("LargestWinner"),
                  r = e.find("NumberOfWinners"),
                  n = e.find("LastWinner"),
                  a = !1;
              s
                  ? ((s = s.toUpperCase()),
                    e.find(s).length && (f.topWinText.html(i.find(s).text()), f.countWinsText.html(r.find(s).text()), f.lastWinText.html(n.find(s).text()), (a = !0)),
                    0 == a && (f.topWinText.html(i.find("EN").text()), f.countWinsText.html(r.find("EN").text()), f.lastWinText.html(n.find("EN").text())))
                  : (f.topWinText.html(i.find("EN").text()), f.countWinsText.html(r.find("EN").text()), f.lastWinText.html(n.find("EN").text()));
          }),
          (O.prototype.setLanguageFromDefaultJson = function (t) {
              (isLanguageSet = !1),
                  s
                      ? ((s = s.toUpperCase()),
                        t.LargestWinner.hasOwnProperty(s) && (f.topWinText.html(t.LargestWinner[s]), f.countWinsText.html(t.NumberOfWinners[s]), f.lastWinText.html(t.LastWinner[s]), (isLanguageSet = !0)),
                        0 == isLanguageSet && (f.topWinText.html(t.LargestWinner.EN), f.countWinsText.html(t.NumberOfWinners.EN), f.lastWinText.html(t.LastWinner.EN)))
                      : (f.topWinText.html(t.LargestWinner.EN), f.countWinsText.html(t.NumberOfWinners.EN), f.lastWinText.html(t.LastWinner.EN));
          }),
          (O.prototype.getJackpot = function (t) {
              var e = this;
              if (I) {
                  var i = new XDomainRequest();
                  i.open("get", t),
                      (i.onload = function () {
                          var t = new ActiveXObject("Microsoft.XMLDOM");
                          (t.async = !1), t.loadXML(i.responseText);
                          var s = $.parseJSON(i.responseText);
                          e.first ? e.onRequestComplete(s) : e.processRequestFromServer(s);
                      }),
                      i.send();
              } else
                  $.ajax({
                      url: t,
                      cache: !1,
                      type: "get",
                      async: !0,
                      crossDomain: !0,
                      dataType: "json",
                      contentType: "application/json; charset=utf-8",
                      success: function (t) {
                          t && (e.first ? e.onRequestComplete(t) : e.processRequestFromServer(t));
                      },
                      error: function (t, e, i) {
                          console.log("xhr.status=" + t.status + " error=" + e + " exception=" + i);
                      },
                  });
          }),
          (O.prototype.updateJackpot = function (t) {
              console.log(t), this.first ? this.onRequestComplete(t) : this.processRequestFromServer(t);
          }),
          (O.prototype.onRequestComplete = function (t) {
              var e = this;
              (e.first = !1), (v = t.currency), y.push(t.currentLevelI), y.push(t.currentLevelII), y.push(t.currentLevelIII), y.push(t.currentLevelIV);
              for (var i = 0; i < 4; i++) b[i].setCurrency(v), b[i].jackpotBox.setValue(y[i], !1), (x[i] = y[i]);
              f.visible(!0),
                  this.setPopUpInformation(S, t.largestWinLevelI, t.largestWinDateLevelI, t.winsLevelI, t.lastWinUserLevelI, t.lastWinDateLevelI, t.lastWinLevelI, t.currency),
                  this.setPopUpInformation(P, t.largestWinLevelII, t.largestWinDateLevelII, t.winsLevelII, t.lastWinUserLevelII, t.lastWinDateLevelII, t.lastWinLevelII, t.currency),
                  this.setPopUpInformation(k, t.largestWinLevelIII, t.largestWinDateLevelIII, t.winsLevelIII, t.lastWinUserLevelIII, t.lastWinDateLevelIII, t.lastWinLevelIII, t.currency),
                  this.setPopUpInformation(w, t.largestWinLevelIV, t.largestWinDateLevelIV, t.winsLevelIV, t.lastWinUserLevelIV, t.lastWinDateLevelIV, t.lastWinLevelIV, t.currency),
                  n &&
                      setTimeout(
                          function () {
                              e.sendRequestToServer();
                          },
                          r[T],
                          1
                      );
          }),
          (O.prototype.sendRequestToServer = function () {
              var e = this,
                  i = e.getISODate(),
                  s = t.split("?");
              1 == s.length ? e.getJackpot(t + "?" + i, !1) : "" == s[1] ? e.getJackpot(t + i, !1) : e.getJackpot(t + "&" + i, !1),
                  T != r.length - 1 && T++,
                  n &&
                      setTimeout(
                          function () {
                              e.sendRequestToServer();
                          },
                          r[T],
                          1
                      );
          }),
          (O.prototype.processRequestFromServer = function (t) {
              (y[0] = t.currentLevelI),
                  (y[1] = t.currentLevelII),
                  (y[2] = t.currentLevelIII),
                  (y[3] = t.currentLevelIV),
                  this.setPopUpInformation(S, t.largestWinLevelI, t.largestWinDateLevelI, t.winsLevelI, t.lastWinUserLevelI, t.lastWinDateLevelI, t.lastWinLevelI, t.currency),
                  this.setPopUpInformation(P, t.largestWinLevelII, t.largestWinDateLevelII, t.winsLevelII, t.lastWinUserLevelII, t.lastWinDateLevelII, t.lastWinLevelII, t.currency),
                  this.setPopUpInformation(k, t.largestWinLevelIII, t.largestWinDateLevelIII, t.winsLevelIII, t.lastWinUserLevelIII, t.lastWinDateLevelIII, t.lastWinLevelIII, t.currency),
                  this.setPopUpInformation(w, t.largestWinLevelIV, t.largestWinDateLevelIV, t.winsLevelIV, t.lastWinUserLevelIV, t.lastWinDateLevelIV, t.lastWinLevelIV, t.currency);
              for (var e = 0; e < 4; e++)
                  b[e].isPopUpOpen &&
                      ("I" == b[e].id && this.updateInformationInPopUp(S), "II" == b[e].id && this.updateInformationInPopUp(P), "III" == b[e].id && this.updateInformationInPopUp(k), "IV" == b[e].id && this.updateInformationInPopUp(w)),
                      this.getDifference(x[e], y[e], e);
          }),
          (O.prototype.setPopUpInformation = function (t, e, i, s, r, n, a, o) {
              (t.LargestWinner = this.convertCoinsToMoney(e, o).money),
                  (t.Currency = this.convertCoinsToMoney(e, o).currency),
                  (dateTmp = new Date(Date.parse(i))),
                  (t.DateOfLargestWin = this.dateToMMDDYYYY(dateTmp)),
                  (dateTmp = null),
                  (t.NumberOfWinners = s),
                  (t.LastWinner = r),
                  (dateTmp = new Date(Date.parse(n))),
                  (t.DateOfLastWinner = this.dateToMMDDYYYY(dateTmp)),
                  (dateTmp = null),
                  (t.LastWinnerAmount = this.convertCoinsToMoney(a, o).money);
          }),
          (O.prototype.updateInformationInPopUp = function (t) {
              f.topWinDate.html(t.DateOfLargestWin),
                  f.topPrice.html(t.LargestWinner),
                  f.currency.html(t.Currency),
                  f.countWinsNumber.html(t.NumberOfWinners),
                  f.lastWinDate.html(t.DateOfLastWinner),
                  f.lastWinner.html(this.checkUserNameLength(t.LastWinner)),
                  f.lastPrice.html(t.LastWinnerAmount);
          }),
          (O.prototype.getDifference = function (t, e, i) {
              var s = e - t;
              s <= 0 ? b[i].jackpotBox.setValue(y[i], !1) : r[T] / 1e3 / s > 5 ? b[i].jackpotBox.setValue(y[i], !0, 5 * s) : b[i].jackpotBox.setValue(y[i], !0, r[T] / 1e3), (x[i] = e), (s = 0);
          }),
          (O.prototype.showPopUp = function (t) {
              R();
              var e = t.data.self,
                  i = t.data.target,
                  s = i.dummyImg,
                  r = i.box,
                  n = f.box;
              if ("I" == i.id) {
                  if (0 === S.NumberOfWinners || void 0 === S.LastWinner) return;
                  e.updateInformationInPopUp(S);
              }
              if ("II" == i.id) {
                  if (0 === P.NumberOfWinners || void 0 === P.LastWinner) return;
                  e.updateInformationInPopUp(P);
              }
              if ("III" == i.id) {
                  if (0 === k.NumberOfWinners || void 0 === k.LastWinner) return;
                  e.updateInformationInPopUp(k);
              }
              if ("IV" == i.id) {
                  if (0 === w.NumberOfWinners || void 0 === w.LastWinner) return;
                  e.updateInformationInPopUp(w);
              }
              (n.height = n.outerHeight()), (n.width = n.outerWidth()), i.updateProps();
              var o = 30 + m,
                  l = n.height + o,
                  h = n.width + o;
              "top" == a &&
                  ((maskProps = { left: r.x, top: r.y - l, width: r.width, height: l }),
                  (popUpProps = { leftStart: Math.round((r.width - n.width) / 2), leftEnd: Math.round((r.width - n.width) / 2), topStart: l, topEnd: l - n.height - d }),
                  (dummyImgProps = { top: -l - r.border + popUpProps.topEnd, left: 0 - r.border, width: r.width, height: r.height + d + n.height })),
                  "bottom" == a &&
                      ((maskProps = { left: r.x, top: r.y + r.height, width: r.width, height: l }),
                      (popUpProps = { leftStart: Math.round((r.width - n.width) / 2), leftEnd: Math.round((r.width - n.width) / 2), topStart: -l, topEnd: d }),
                      (dummyImgProps = { top: 0 - r.border, left: 0 - r.border, width: r.width, height: r.height + d + n.height })),
                  "left" == a &&
                      ((maskProps = { left: r.x - h, top: r.y + r.height / 2 - n.height / 2, width: h, height: n.height }),
                      (popUpProps = { leftStart: h, leftEnd: h - n.width - d - m, topStart: 0, topEnd: 0 }),
                      (dummyImgProps = { top: 0 - r.border + r.height / 2 - n.height / 2, left: 0 - r.border - d - m - n.width, width: n.width + d + m + r.width, height: n.height })),
                  "right" == a &&
                      ((maskProps = { left: r.x + r.width, top: r.y + r.height / 2 - n.height / 2, width: h, height: n.height }),
                      (popUpProps = { leftStart: -h, leftEnd: d, topStart: 0, topEnd: 0 }),
                      (dummyImgProps = { top: 0 - r.border + r.height / 2 - n.height / 2, left: 0 - r.border, width: r.width + d + n.width, height: n.height }));
              var p = function () {
                      i.showPopUpTween && (i.showPopUpTween.kill(), (i.showPopUpTween = null)),
                          (i.isPopUpOpen = !1),
                          r.css("z-index", 30001),
                          n.css("z-index", 3e4),
                          f.mask.css({ width: 0, height: 0 }),
                          s.css({ top: 0, left: 0, width: "100%", height: "100%" }),
                          i.setClickableArea(),
                          (i.hidePopUpTween = TweenMax.to(n, 0.25, {
                              opacity: 0,
                              onComplete: function () {
                                  i.hidePopUpTween.kill(), (i.hidePopUpTween = null);
                              },
                          }));
                  },
                  u = function () {
                      for (var t = 0; t < b.length; t++)
                          n.css("opacity", 0),
                              b[t].showPopUpTween && (b[t].showPopUpTween.kill(), (b[t].showPopUpTween = null)),
                              b[t].hidePopUpTween && (b[t].hidePopUpTween.kill(), (b[t].hidePopUpTween = null)),
                              (b[t].isPopUpOpen = !1),
                              b[t].box.css("z-index", 30001),
                              b[t].dummyImg.css({ top: 0, left: 0, width: "100%", height: "100%" }),
                              b[t].setClickableArea();
                      n.css("z-index", 3e4);
                  };
              i.isPopUpOpen
                  ? p()
                  : (u(),
                    i.hidePopUpTween && i.hidePopUpTween.seek(i.hidePopUpTween.duration()),
                    r.css("z-index", 30003),
                    n.css("opacity", 0).css("z-index", 30002),
                    f.mask.css({ width: maskProps.width, height: maskProps.height, left: maskProps.left, top: maskProps.top }),
                    n.css({ left: popUpProps.leftStart, top: popUpProps.topStart }),
                    TweenMax.to(n, 0.25, { opacity: 1, ease: Linear.easeNone }),
                    (i.showPopUpTween = TweenMax.to(n, 0.5, {
                        left: popUpProps.leftEnd,
                        top: popUpProps.topEnd,
                        ease: Back.easeOut.config(1),
                        onComplete: function () {
                            s.css({ top: dummyImgProps.top, left: dummyImgProps.left, width: dummyImgProps.width, height: dummyImgProps.height }),
                                i.updateClickableArea(n.width, n.height, d + m, a),
                                (i.isPopUpOpen = !0),
                                i.showPopUpTween && void 0 !== i.showPopUpTween.kill && i.showPopUpTween.kill(),
                                (i.showPopUpTween = null);
                        },
                    }))),
                  "mouseenter" != t.type || this.onMouseleave || ((this.onMouseleave = !this.onMouseleave), $(this).on("mouseleave", p)),
                  $(document).on("touchstart", function () {
                      for (var t = 0; t < b.length; t++) b[t].isPopUpOpen && u();
                  });
          }),
          (O.prototype.checkUserNameLength = function (t) {
              return t.length > 17 ? t.slice(0, 17) + "..." : t;
          }),
          (O.prototype.convertCoinsToMoney = function (t, e) {
              var i = e;
              return (index = t.toString().length - 2), { currency: i, money: t.toString().slice(0, index) + "." + t.toString().slice(index) };
          }),
          (O.prototype.dateToMMDDYYYY = function (t) {
              return (mm = (t.getMonth() + 1).toString()), mm.length < 2 && (mm = "0" + mm), (dd = t.getDate().toString()), dd.length < 2 && (dd = "0" + dd), (yyyy = t.getFullYear().toString()), dd + i + mm + i + yyyy;
          }),
          (O.prototype.createDiv = function (t) {
              return t.append("<div></div>"), $(t.children().get(-1));
          }),
          (O.prototype.createLogoImg = function (t) {
              return t.append('<a target="_blank"><img class="com-egt-jackpot-html-amusenet-logo" src="img/logo.png" style="height: 100%;"></img></a>'), $(t.children().get(-1));
          }),
          (O.prototype.createLink = function (t) {
              return t.append('<div target="_blank"></div>'), $(t.children().get(-1));
          }),
          (O.prototype.getISODate = function () {
              Date.prototype.toISOString ||
                  (function () {
                      function t(t) {
                          return t < 10 ? "0" + t : t;
                      }
                      Date.prototype.toISOString = function () {
                          return (
                              this.getUTCFullYear() +
                              "-" +
                              t(this.getUTCMonth() + 1) +
                              "-" +
                              t(this.getUTCDate()) +
                              "T" +
                              t(this.getUTCHours()) +
                              ":" +
                              t(this.getUTCMinutes()) +
                              ":" +
                              t(this.getUTCSeconds()) +
                              "." +
                              (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
                              "Z"
                          );
                      };
                  })();
          }),
          (O.prototype.appendIE8Box = function (t) {
              var i = $('<div class="com-egt-jackpot-html-ie8">' + l + "</div>");
              e.append(i).css({ minHeight: t + "px", lineHeight: t + "px" });
          }),
          (O.prototype.applyResponsive = function () {
              var t = e.width();
              e.removeClass(),
                  t < h && e.toggleClass("com-egt-jackpot-html-xsm"),
                  t >= h && t < p && e.toggleClass("com-egt-jackpot-html-sm"),
                  t >= p && t < u && e.toggleClass("com-egt-jackpot-html-md"),
                  t >= u && t < c && e.toggleClass("com-egt-jackpot-html-lg"),
                  t >= c && e.toggleClass("com-egt-jackpot-html-xlg"),
                  f.hideAllPopups();
              for (var i = 0; i < b.length; i++) (b.isPopUpOpen = !1), b[i].setClickableArea();
              void 0 !== o || b[0].box.width > o ? f.updatePopUpWidth(b[0].box.width) : f.updatePopUpWidth(o);
              const s = document.getElementById("com-egt-jackpot-html-jackpotBanner").className,
                  r = "com-egt-jackpot-html-".length;
              let n = s.substring(r);
              f.newSize(n);
          }),
          (O.prototype.updateBoxOrder = D),
          O
      );
  })()),
      $(window).resize(function () {
          R(),
              setTimeout(() => {
                  _ && D(), R();
              }, 500);
      }),
      $("area").click(function () {
          $(this).blur();
      });
}.call(this));
var imageLoaded = !1,
  isWaitingToLoadImage = !1;
function PopUp(t, e, i) {
  var s,
      r,
      n,
      a,
      o,
      l,
      h,
      p,
      u,
      c,
      _,
      f,
      d,
      m,
      g,
      v,
      y,
      x = this;
  (r = "com-egt-jackpot-html-date"),
      (n = "com-egt-jackpot-html-count"),
      (a = "com-egt-jackpot-html-topPrice"),
      (o = "com-egt-jackpot-html-price"),
      (l = "com-egt-jackpot-html-right"),
      (CENTER = "com-egt-jackpot-html-center"),
      (h = "com-egt-jackpot-html-last"),
      (LOGO = "com-egt-jackpot-html-logoPopUp"),
      (s = $(t)),
      (LOGO_HTML = $('<div class="com-egt-jackpot-html-logoPopUp"></div>')),
      (DIV_HTML = '<div class="com-egt-jackpot-html-div"></div>'),
      (MASK_HTML = '<div class="com-egt-jackpot-html-popUpMask"></div>'),
      (p = '<div class="com-egt-jackpot-html-popUp"></div>'),
      (u = '<div id="com-egt-jackpot-html-topWin"></div>'),
      (c = '<span id="com-egt-jackpot-html-topPrice"></span>'),
      (f = '<span class="com-egt-jackpot-html-cur com-egt-jackpot-html-lastCur"></span>'),
      (_ = '<span class="com-egt-jackpot-html-cur com-egt-jackpot-html-topCur"></span>'),
      (d = '<div class="com-egt-jackpot-html-divider"></div>'),
      (m = '<div id="com-egt-jackpot-html-countWins"></div>'),
      (g = '<div id="com-egt-jackpot-html-lastWin"></div>'),
      (LAST_PRICE_HTML = '<span id="com-egt-jackpot-html-lastPrice"></span>');
  return (
      (v = `<div class="com-egt-jackpot-html-before ${null != navigator.userAgent.match(/Android/i) ? "com-egt-jackpot-html-before-android" : ""}"></div>`),
      (x.mask = $(MASK_HTML)),
      s.append(x.mask),
      (x.box = $(p).css({ opacity: 0, width: i, borderWidth: e.borderWidth, borderStyle: "solid", borderColor: e.borderColor })),
      x.mask.append(x.box),
      (x.topWinText = $(u)),
      (x.topWinDate = $('<div id="com-egt-jackpot-html-topWinDate"></div>').addClass(r).addClass(l).css({ color: e.dateColor })),
      x.box.append($(DIV_HTML).append(x.topWinText).append(x.topWinDate)),
      (x.topPrice = $(c).addClass(o).addClass(a)),
      x.box.append($(DIV_HTML).addClass(CENTER).append(x.topPrice).append(_)),
      x.box.append(d),
      (x.countWinsText = $(m)),
      (x.countWinsNumber = $('<div id="com-egt-jackpot-html-countWinsNumber"></div>').addClass(n).addClass(l)),
      x.box.append($(DIV_HTML).append(x.countWinsText).append(x.countWinsNumber)),
      x.box.append(d),
      (x.lastWinText = $(g)),
      (x.lastWinDate = $('<div id="com-egt-jackpot-html-lastWinDate"></div>').addClass(r).addClass(l).css({ color: e.dateColor })),
      x.box.append($(DIV_HTML).append(x.lastWinText).append(x.lastWinDate)),
      (x.lastWinner = $('<div id="com-egt-jackpot-html-lastWinner"></div>').css({ color: e.lastWinnerUsernameColor })),
      x.box.append($(DIV_HTML).append(x.lastWinner)),
      (x.lastPrice = $(LAST_PRICE_HTML).addClass(o)),
      x.box.append($(DIV_HTML).addClass(CENTER).append(x.lastPrice).append(f)),
      (x.currency = $(".com-egt-jackpot-html-cur")),
      x.box.append($(d).addClass(h)),
      e.logoPopUp && (x.logo = $(LOGO_HTML).css({ height: 25 })),
      x.box.append(x.logo),
      (x.before = $(v)),
      x.box.prepend(x.before),
      (x.position = e.popUpBoxPosition),
      (x.generateArrow = function (t, e, i, s, r, n) {
          var a = t + 2 * r;
          switch (i) {
              case "bottom":
                  (x.before.className = "com-egt-jackpot-html-before bottom"), x.before.css({ left: s });
                  break;
              case "top":
                  (x.before.className = "com-egt-jackpot-html-before top"), x.before.css({ left: s });
                  break;
              case "left":
                  (x.before.className = "com-egt-jackpot-html-before left"), x.before.css({ top: s });
                  break;
              case "right":
                  (x.before.className = "com-egt-jackpot-html-before right"), x.before.css({ top: s });
          }
          return a - r;
      }),
      (x.updatePopUpWidth = function (t) {
          x.box.css({ width: t });
      }),
      (x.hideAllPopups = function () {
          x.box.css({ opacity: 0 });
      }),
      (x.newSize = function (t) {
          x.box.removeClass(y), (y = t), x.box.addClass(t);
      }),
      (x.visible = function (t) {
          void 0 === t || t ? x.box.css("display", "block") : x.box.css("display", "none");
      }),
      this
  );
}
function RollingComponent(t, e, i, s) {
  var r,
      n = this;
  (n.id = e),
      (n.resourceURL = ""),
      void 0 !== i.resourceURL && i.resourceURL && i.resourceURL.length > 0 && (n.resourceURL = i.resourceURL + "/"),
      (n.resourceURL = n.resourceURL.replace(/\/+$/gim, "/")),
      (BOX_HTML = '<div class="com-egt-jackpot-html-box"></div>'),
      (DUMMY_IMG_HTML = '<img src="' + n.resourceURL + 'img/dummy.png" class="com-egt-jackpot-html-dummyImg" usemap="#' + e + '">'),
      (MAP_HTML = '<map name="' + e + '"></map>'),
      (AREA_HTML = '<area shape="poly" href="javascript: void(0);">'),
      (LEVEL_HTML = '<div class="com-egt-jackpot-html-level"></div>'),
      (CURRENCY_TEXT = '<span class="com-egt-jackpot-html-currencyText"></span>'),
      (r = '<div class="com-egt-jackpot-html-currency">' + CURRENCY_TEXT + "</div>"),
      (n.generateLevels = function (t, e) {
          $(this.level).css({ width: e, height: e, backgroundImage: 'url("' + this.resourceURL + "img/" + t + '.png")' });
      }),
      (n.box = $(BOX_HTML)),
      $(t).css({ padding: i.boxPadding + "px 0", position: "relative" }),
      t.append(n.box.addClass("com-egt-jackpot-html-" + e)),
      i.logo || n.box.addClass("com-egt-jackpot-html-no-logo"),
      i.boxWidthEqual && n.box.addClass("com-egt-jackpot-html-equal"),
      n.box.css({ borderWidth: i.borderWidth, borderRadius: i.borderRadius, borderStyle: "solid", borderColor: i.borderColor, height: i.boxHeight }),
      (n.dummyImg = $(DUMMY_IMG_HTML)),
      (n.dummyImg.map = $(MAP_HTML)),
      (n.dummyImg.map.area = $(AREA_HTML)),
      (n.level = $(LEVEL_HTML).css({ left: -(i.levelSize / 2 + i.borderWidth / 2) + "px", top: (i.boxHeight - i.levelSize) / 2 - i.borderWidth })),
      n.level.attr("width", i.levelSize),
      n.level.attr("height", i.levelSize),
      n.generateLevels(e, i.levelSize),
      (n.currency = $(r).css({ lineHeight: i.currencyLineHeight + "px", fontSize: i.currencyFontSize + "px" })),
      n.currency.children().css({ paddingTop: i.currencyPaddingTop + "px" }),
      (n.jackpotBox = new RollingNumberView(n.box, i, s)),
      (n.box.x = n.box.offset().left - t.offset().left),
      (n.box.y = n.box.position().top),
      (n.box.width = n.box.outerWidth()),
      (n.box.height = n.box.outerHeight()),
      (n.box.border = (n.box.outerWidth() - n.box.innerWidth()) / 2),
      (n.showPopUpTween = null),
      (n.hidePopUpTween = null),
      (n.isPopUpOpen = null),
      (n.append = function () {
          n.box.append(n.level), n.box.append(n.jackpotBox), n.box.append(n.currency), n.box.append(n.dummyImg), n.box.append(n.dummyImg.map), n.dummyImg.map.append(n.dummyImg.map.area), n.setClickableArea();
      }),
      (n.setCurrency = function (t) {
          n.currency.children().html(t);
      }),
      (n.visible = function (t) {
          void 0 === t || t ? n.box.css("display", "block") : n.box.css("display", "none");
      }),
      (n.setClickableArea = function () {
          n.updateProps(),
              n.dummyImg.css({ top: -n.box.border, left: -n.box.border, width: n.box.width, height: n.box.height }),
              (n.dummyImg.map.area.coords = [0, 0, n.box.width, 0, n.box.width, n.box.height, 0, n.box.height]),
              n.dummyImg.map.area.attr("coords", [0, 0, n.box.width, 0, n.box.width, n.box.height, 0, n.box.height]);
      }),
      (n.updateProps = function () {
          (n.box.x = n.box.offset().left - t.offset().left), (n.box.y = n.box.position().top), (n.box.width = n.box.outerWidth()), (n.box.height = n.box.outerHeight()), (n.box.border = (n.box.outerWidth() - n.box.innerWidth()) / 2);
      }),
      (n.updateClickableArea = function (t, e, i, s) {
          var r = n.dummyImg.map.area.coords,
              a = n.box.width,
              o = n.box.height,
              l = [];
          if ("bottom" == s)
              var h = (a - t) / 2,
                  p = 0,
                  u = 0;
          else if ("top" == s) (h = (a - t) / 2), (p = e + i), (u = 0);
          else if ("right" == s) (p = h = (e - o) / 2), (u = 0);
          else if ("left" == s) (p = h = (e - o) / 2), (u = t + i);
          for (var c = 0; c < r.length; c++) {
              if ((0 == c && "left" == s && (l.push(0), l.push(0), l.push(t), l.push(0)), 2 == c && "top" == s)) for (var _ = 0; _ < 4; _++) _ < 2 ? l.push(h) : l.push(a - h), _ > 0 && _ < 3 ? l.push(0) : l.push(p);
              if (4 == c && "right" == s) for (_ = 0; _ < 4; _++) _ > 0 && _ < 3 ? l.push(a + i + t) : l.push(a + i), _ < 2 ? l.push(0) : l.push(e);
              if (6 == c && "bottom" == s) for (_ = 0; _ < 4; _++) _ < 2 ? l.push(a - h) : l.push(h), _ > 0 && _ < 3 ? l.push(o + i + e) : l.push(o);
              c % 2 != 0 ? l.push(r[c] + p) : (2 != c && 4 != c) || "right" != s ? ((0 != c && 6 != c) || "left" != s ? l.push(r[c] + u) : l.push(r[c] + u - i)) : l.push(r[c] + u + i),
                  c == r.length - 1 && "left" == s && (l.push(t), l.push(e), l.push(0), l.push(e));
          }
          n.dummyImg.map.area.attr("coords", l);
      });
}
function RollingNumberView(t, e, i) {
  var s, r, n, a, o;
  (s = '<div class="com-egt-jackpot-html-value"></div>'),
      (n = '<div class="com-egt-jackpot-html-numbers"></div>'),
      (r = '<span class="com-egt-jackpot-html-digit"></span>'),
      (a = '<span class="com-egt-jackpot-html-old"></span>'),
      (o = '<span class="com-egt-jackpot-html-new"></span>');
  var l = this;
  (height = e.boxHeight - 2 * e.borderWidth),
      (_currValue = 0),
      (_delta = 0),
      (_direction = 0),
      (_oldDirection = 0),
      (_timePerCent = 0),
      (_totalTime = 0),
      (_finalCentValue = 0),
      (_finalValue = 0),
      (l.maxDigits = i.maxDigits < 3 ? 3 : i.maxDigits),
      (l._numbers = []),
      (l._digitTweens = []),
      (l._digitTweens.alpha = 0),
      l._failSafeTween,
      (l._dummyObject = { value: 0 }),
      (l.value = $(s)),
      t.append(l.value),
      l.value.append($(n).addClass("com-egt-jackpot-html-first"));
  for (var h = 0; h < l.maxDigits; h++) {
      var p = $(a).css({ height: height + "px" }),
          u = $(o).css({ height: height + "px" }),
          c = $(r),
          _ = $(n).append(c.append(p).append(u)).css({ display: "none" });
      if (
          (_.css({ lineHeight: height + "px" }),
          (_.visible = !1),
          l.value.append(_),
          l._numbers.push(_),
          (l._numbers[h].digits = c),
          (l._numbers[h].digits.oldNum = p),
          l._numbers[h].digits.oldNum.text(0),
          (l._numbers[h].digits.newNum = u),
          h == l.maxDigits - 3)
      ) {
          var f = $(n).addClass("com-egt-jackpot-html-dot").append($("<span>.</span>")).css({ display: "none" });
          f.css({ lineHeight: height + "px" }), l.value.append(f), (l._numbers.dot = f);
      }
  }
  (l.isAnimating = function () {
      for (var t = l._digitTweens.length, e = 0; e < t; e++) if (l._digitTweens[e]) return !0;
      return !!l._failSafeTween;
  }),
      (l.complete = function (t) {
          l.isAnimating() && TweenMax.to(t, 0.3, { alpha: 0, ease: Linear.easeNone, onComplete: l.onFadeOutComplete });
      }),
      (l.setValue = function (t, e, i) {
          if (((l._finalCentValue = t), (l._finalValue = t), (l._totalTime = i), e)) {
              if (((l._delta = l._currValue - t), 0 == l._delta)) return;
              var s = l._direction;
              (l._direction = l._delta < 0 ? -1 : 1),
                  (l._oldDirection = l._direction),
                  (l._timePerCent = Math.abs(i / l._delta)),
                  l.isAnimating()
                      ? (s != l._direction && (l._oldDirection = s),
                        l._failSafeTween && (l._failSafeTween.kill(), (l._failSafeTween = null), (l._finalValue = l._dummyObject.value), l.setFinalValue(), (l._finalValue = t), l.animateDigit(l.maxDigits - 1)))
                      : l.animateDigit(l.maxDigits - 1);
          } else l.isAnimating() ? l.onFadeOutComplete() : l.setFinalValue();
      }),
      (l.setFinalValue = function () {
          this._currValue = this._finalValue;
          var t = this._finalValue,
              e = this._numbers.length;
          t > Math.pow(10, e) - 1 && (t %= Math.pow(10, e));
          var i = t.toString(),
              s = i.length;
          s <= 1 ? (i = "00" + i) : s <= 2 && (i = "0" + i), (s = i.length);
          for (var r = 0; r < e; r++)
              r >= e - s ? (this._numbers[r].css({ display: "block" }).digits.oldNum.html(i[r - (e - i.length)]), (this._numbers[r].visible = !0)) : (this._numbers[r].css({ display: "none" }), (this._numbers[r].visible = !1));
          (this._digitTweens.alpha = 1), this._numbers.dot.css({ display: "block" });
      }),
      (l.animateDigit = function (t) {
          var e = this;
          if (0 != t) {
              if ((e._digitTweens[t] && e.complete(e._digitTweens[t]), e._timePerCent < 0.02))
                  return (
                      (e._dummyObject.value = e._currValue),
                      (e._dummyObject.finalValue = e._finalValue),
                      void (e._failSafeTween = TweenMax.to(e._dummyObject, e._totalTime, {
                          value: e._finalCentValue,
                          ease: Linear.easeNone,
                          roundProps: ["value"],
                          onUpdate: e.onFailSaveTweenUpdate,
                          onComplete: function () {
                              e._failSafeTween = null;
                          },
                      }))
                  );
              var i = e._numbers[t].digits,
                  s = i.oldNum,
                  r = i.newNum,
                  n = parseInt(s.text()),
                  a = n - 1 * e._direction;
              -1 == e._direction ? (a > 9 && (a = 0), r.html(a.toString())) : (a < 0 && (a = 9), r.html(n.toString()), s.html(a.toString())),
                  ((-1 == e._direction && 9 == n) || (1 == e._direction && 0 == n)) && (e._numbers[t - 1].visible || (e._numbers[t - 1].css({ display: "block" }), (e._numbers[t - 1].visible = !0)), e.animateDigit(t - 1)),
                  (e._digitTweens[t] = TweenMax.to(i, e._timePerCent, { top: height * e._direction, ease: Linear.easeNone, onComplete: e.onCentAnimationComplete, onCompleteParams: [t] }));
          }
      }),
      (l.onCentAnimationComplete = function (t) {
          l._digitTweens[t] = null;
          var e = l._numbers[t].digits;
          -1 == l._oldDirection && (e.css("top", 0), e.oldNum.html(e.newNum.text())),
              t == l.maxDigits - 1 && ((l._currValue += -1 * l._oldDirection), (l._oldDirection = l._direction), l._currValue != l._finalValue && l.animateDigit(l.maxDigits - 1));
      }),
      (l.onFailSaveTweenUpdate = function () {
          (l._finalValue = l._dummyObject.value), l.setFinalValue();
      }),
      (l.onFadeOutComplete = function () {
          l._failSafeTween && (l._finalValue = l._dummyObject.finalValue), l.killTweens(), l.setFinalValue();
      }),
      (l.killTweens = function () {
          for (var t = l._digitTweens.length, e = 0; e < t; e++) l._digitTweens[e] && (l._digitTweens[e].totalTime(0), l._digitTweens[e].kill(), (l._digitTweens[e] = null));
          l._failSafeTween && l._failSafeTween.kill(), (l._failSafeTween = null);
      });
}
(window._gsQueue || (window._gsQueue = [])).push(function () {
  "use strict";
  var t, e, i, s, r, n, a, o, l, h, p, u, c, _, f;
  window._gsDefine(
      "TweenMax",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
          var s = [].slice,
              r = function (t, e, s) {
                  i.call(this, t, e, s),
                      (this._cycle = 0),
                      (this._yoyo = !0 === this.vars.yoyo),
                      (this._repeat = this.vars.repeat || 0),
                      (this._repeatDelay = this.vars.repeatDelay || 0),
                      (this._dirty = !0),
                      (this.render = r.prototype.render);
              },
              n = 1e-10,
              a = i._internals.isSelector,
              o = i._internals.isArray,
              l = (r.prototype = i.to({}, 0.1, {})),
              h = [];
          (r.version = "1.11.2"),
              (l.constructor = r),
              (l.kill()._gc = !1),
              (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
              (r.getTweensOf = i.getTweensOf),
              (r.ticker = i.ticker),
              (l.invalidate = function () {
                  return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), i.prototype.invalidate.call(this);
              }),
              (l.updateTo = function (t, e) {
                  var s,
                      r = this.ratio;
                  for (s in (e &&
                      this.timeline &&
                      this._startTime < this._timeline._time &&
                      ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
                  t))
                      this.vars[s] = t[s];
                  if (this._initted)
                      if (e) this._initted = !1;
                      else if ((this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                          var n = this._time;
                          this.render(0, !0, !1), (this._initted = !1), this.render(n, !0, !1);
                      } else if (this._time > 0) {
                          (this._initted = !1), this._init();
                          for (var a, o = 1 / (1 - r), l = this._firstPT; l; ) (a = l.s + l.c), (l.c *= o), (l.s = a - l.c), (l = l._next);
                      }
                  return this;
              }),
              (l.render = function (t, e, i) {
                  this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                  var s,
                      r,
                      a,
                      o,
                      l,
                      p,
                      u,
                      c,
                      _ = this._dirty ? this.totalDuration() : this._totalDuration,
                      f = this._time,
                      d = this._totalTime,
                      m = this._cycle,
                      g = this._duration;
                  if (
                      (t >= _
                          ? ((this._totalTime = _),
                            (this._cycle = this._repeat),
                            this._yoyo && 0 != (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = g), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                            this._reversed || ((s = !0), (r = "onComplete")),
                            0 === g && ((c = this._rawPrevTime), (0 === t || 0 > c || c === n) && c !== t && ((i = !0), c > n && (r = "onReverseComplete")), (this._rawPrevTime = c = !e || t ? t : n)))
                          : 1e-7 > t
                          ? ((this._totalTime = this._time = this._cycle = 0),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                            (0 !== d || (0 === g && this._rawPrevTime > n)) && ((r = "onReverseComplete"), (s = this._reversed)),
                            0 > t ? ((this._active = !1), 0 === g && (this._rawPrevTime >= 0 && (i = !0), (this._rawPrevTime = c = !e || t ? t : n))) : this._initted || (i = !0))
                          : ((this._totalTime = this._time = t),
                            0 !== this._repeat &&
                                ((o = g + this._repeatDelay),
                                (this._cycle = (this._totalTime / o) >> 0),
                                0 !== this._cycle && this._cycle === this._totalTime / o && this._cycle--,
                                (this._time = this._totalTime - this._cycle * o),
                                this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time),
                                this._time > g ? (this._time = g) : 0 > this._time && (this._time = 0)),
                            this._easeType
                                ? ((l = this._time / g),
                                  (p = this._easeType),
                                  (u = this._easePower),
                                  (1 === p || (3 === p && l >= 0.5)) && (l = 1 - l),
                                  3 === p && (l *= 2),
                                  1 === u ? (l *= l) : 2 === u ? (l *= l * l) : 3 === u ? (l *= l * l * l) : 4 === u && (l *= l * l * l * l),
                                  (this.ratio = 1 === p ? 1 - l : 2 === p ? l : 0.5 > this._time / g ? l / 2 : 1 - l / 2))
                                : (this.ratio = this._ease.getRatio(this._time / g))),
                      f !== this._time || i || m !== this._cycle)
                  ) {
                      if (!this._initted) {
                          if ((this._init(), !this._initted || this._gc)) return;
                          this._time && !s ? (this.ratio = this._ease.getRatio(this._time / g)) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                      }
                      for (
                          this._active || (!this._paused && this._time !== f && t >= 0 && (this._active = !0)),
                              0 === d &&
                                  (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                                  this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))),
                              a = this._firstPT;
                          a;

                      )
                          a.f ? a.t[a.p](a.c * this.ratio + a.s) : (a.t[a.p] = a.c * this.ratio + a.s), (a = a._next);
                      this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)),
                          this._cycle !== m && (e || this._gc || (this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h))),
                          r &&
                              (this._gc ||
                                  (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                                  s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                  !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || h),
                                  0 === g && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0)));
                  } else d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h));
              }),
              (r.to = function (t, e, i) {
                  return new r(t, e, i);
              }),
              (r.from = function (t, e, i) {
                  return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new r(t, e, i);
              }),
              (r.fromTo = function (t, e, i, s) {
                  return (s.startAt = i), (s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender), new r(t, e, s);
              }),
              (r.staggerTo = r.allTo = function (t, e, n, l, p, u, c) {
                  l = l || 0;
                  var _,
                      f,
                      d,
                      m,
                      g = n.delay || 0,
                      v = [],
                      y = function () {
                          n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), p.apply(c || this, u || h);
                      };
                  for (o(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s.call(t, 0))), _ = t.length, d = 0; _ > d; d++) {
                      for (m in ((f = {}), n)) f[m] = n[m];
                      (f.delay = g), d === _ - 1 && p && (f.onComplete = y), (v[d] = new r(t[d], e, f)), (g += l);
                  }
                  return v;
              }),
              (r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
                  return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), r.staggerTo(t, e, i, s, n, a, o);
              }),
              (r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, l) {
                  return (s.startAt = i), (s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender), r.staggerTo(t, e, s, n, a, o, l);
              }),
              (r.delayedCall = function (t, e, i, s, n) {
                  return new r(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: n, overwrite: 0 });
              }),
              (r.set = function (t, e) {
                  return new r(t, 0, e);
              }),
              (r.isTweening = function (t) {
                  return i.getTweensOf(t, !0).length > 0;
              });
          var p = function (t, e) {
                  for (var s = [], r = 0, n = t._first; n; ) n instanceof i ? (s[r++] = n) : (e && (s[r++] = n), (r = (s = s.concat(p(n, e))).length)), (n = n._next);
                  return s;
              },
              u = (r.getAllTweens = function (e) {
                  return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e));
              });
          (r.killAll = function (t, i, s, r) {
              null == i && (i = !0), null == s && (s = !0);
              var n,
                  a,
                  o,
                  l = u(0 != r),
                  h = l.length,
                  p = i && s && r;
              for (o = 0; h > o; o++) (a = l[o]), (p || a instanceof e || ((n = a.target === a.vars.onComplete) && s) || (i && !n)) && (t ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1));
          }),
              (r.killChildTweensOf = function (t, e) {
                  if (null != t) {
                      var n,
                          l,
                          h,
                          p,
                          u,
                          c = i._tweenLookup;
                      if (("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = s(t, 0)), o(t))) for (p = t.length; --p > -1; ) r.killChildTweensOf(t[p], e);
                      else {
                          for (h in ((n = []), c)) for (l = c[h].target.parentNode; l; ) l === t && (n = n.concat(c[h].tweens)), (l = l.parentNode);
                          for (u = n.length, p = 0; u > p; p++) e && n[p].totalTime(n[p].totalDuration()), n[p]._enabled(!1, !1);
                      }
                  }
              });
          var c = function (t, i, s, r) {
              (i = !1 !== i), (s = !1 !== s);
              for (var n, a, o = u((r = !1 !== r)), l = i && s && r, h = o.length; --h > -1; ) (a = o[h]), (l || a instanceof e || ((n = a.target === a.vars.onComplete) && s) || (i && !n)) && a.paused(t);
          };
          return (
              (r.pauseAll = function (t, e, i) {
                  c(!0, t, e, i);
              }),
              (r.resumeAll = function (t, e, i) {
                  c(!1, t, e, i);
              }),
              (r.globalTimeScale = function (e) {
                  var s = t._rootTimeline,
                      r = i.ticker.time;
                  return arguments.length
                      ? ((e = e || n),
                        (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
                        (s = t._rootFramesTimeline),
                        (r = i.ticker.frame),
                        (s._startTime = r - ((r - s._startTime) * s._timeScale) / e),
                        (s._timeScale = t._rootTimeline._timeScale = e),
                        e)
                      : s._timeScale;
              }),
              (l.progress = function (t) {
                  return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
              }),
              (l.totalProgress = function (t) {
                  return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
              }),
              (l.time = function (t, e) {
                  return arguments.length
                      ? (this._dirty && this.totalDuration(),
                        t > this._duration && (t = this._duration),
                        this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e))
                      : this._time;
              }),
              (l.duration = function (e) {
                  return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
              }),
              (l.totalDuration = function (t) {
                  return arguments.length
                      ? -1 === this._repeat
                          ? this
                          : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1))
                      : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
              }),
              (l.repeat = function (t) {
                  return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
              }),
              (l.repeatDelay = function (t) {
                  return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
              }),
              (l.yoyo = function (t) {
                  return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
              }),
              r
          );
      },
      !0
  ),
      window._gsDefine(
          "TimelineLite",
          ["core.Animation", "core.SimpleTimeline", "TweenLite"],
          function (t, e, i) {
              var s = function (t) {
                      e.call(this, t),
                          (this._labels = {}),
                          (this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
                          (this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
                          (this._sortChildren = !0),
                          (this._onUpdate = this.vars.onUpdate);
                      var i,
                          s,
                          r = this.vars;
                      for (s in r) (i = r[s]), a(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                      a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
                  },
                  r = 1e-10,
                  n = i._internals.isSelector,
                  a = i._internals.isArray,
                  o = [],
                  l = function (t) {
                      var e,
                          i = {};
                      for (e in t) i[e] = t[e];
                      return i;
                  },
                  h = function (t, e, i, s) {
                      t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || o);
                  },
                  p = o.slice,
                  u = (s.prototype = new e());
              return (
                  (s.version = "1.11.0"),
                  (u.constructor = s),
                  (u.kill()._gc = !1),
                  (u.to = function (t, e, s, r) {
                      return e ? this.add(new i(t, e, s), r) : this.set(t, s, r);
                  }),
                  (u.from = function (t, e, s, r) {
                      return this.add(i.from(t, e, s), r);
                  }),
                  (u.fromTo = function (t, e, s, r, n) {
                      return e ? this.add(i.fromTo(t, e, s, r), n) : this.set(t, r, n);
                  }),
                  (u.staggerTo = function (t, e, r, a, o, h, u, c) {
                      var _,
                          f = new s({ onComplete: h, onCompleteParams: u, onCompleteScope: c });
                      for ("string" == typeof t && (t = i.selector(t) || t), n(t) && (t = p.call(t, 0)), a = a || 0, _ = 0; t.length > _; _++) r.startAt && (r.startAt = l(r.startAt)), f.to(t[_], e, l(r), _ * a);
                      return this.add(f, o);
                  }),
                  (u.staggerFrom = function (t, e, i, s, r, n, a, o) {
                      return (i.immediateRender = 0 != i.immediateRender), (i.runBackwards = !0), this.staggerTo(t, e, i, s, r, n, a, o);
                  }),
                  (u.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
                      return (s.startAt = i), (s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender), this.staggerTo(t, e, s, r, n, a, o, l);
                  }),
                  (u.call = function (t, e, s, r) {
                      return this.add(i.delayedCall(0, t, e, s), r);
                  }),
                  (u.set = function (t, e, s) {
                      return (s = this._parseTimeOrLabel(s, 0, !0)), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
                  }),
                  (s.exportRoot = function (t, e) {
                      null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                      var r,
                          n,
                          a = new s(t),
                          o = a._timeline;
                      for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r; )
                          (n = r._next), (e && r instanceof i && r.target === r.vars.onComplete) || a.add(r, r._startTime - r._delay), (r = n);
                      return o.add(a, 0), a;
                  }),
                  (u.add = function (r, n, o, l) {
                      var h, p, u, c, _, f;
                      if (("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t))) {
                          if (r instanceof Array || (r && r.push && a(r))) {
                              for (o = o || "normal", l = l || 0, h = n, p = r.length, u = 0; p > u; u++)
                                  a((c = r[u])) && (c = new s({ tweens: c })),
                                      this.add(c, h),
                                      "string" != typeof c && "function" != typeof c && ("sequence" === o ? (h = c._startTime + c.totalDuration() / c._timeScale) : "start" === o && (c._startTime -= c.delay())),
                                      (h += l);
                              return this._uncache(!0);
                          }
                          if ("string" == typeof r) return this.addLabel(r, n);
                          if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                          r = i.delayedCall(0, r);
                      }
                      if ((e.prototype.add.call(this, r, n), this._gc && !this._paused && this._duration < this.duration()))
                          for (f = (_ = this).rawTime() > r._startTime; _._gc && _._timeline; ) _._timeline.smoothChildTiming && f ? _.totalTime(_._totalTime, !0) : _._enabled(!0, !1), (_ = _._timeline);
                      return this;
                  }),
                  (u.remove = function (e) {
                      if (e instanceof t) return this._remove(e, !1);
                      if (e instanceof Array || (e && e.push && a(e))) {
                          for (var i = e.length; --i > -1; ) this.remove(e[i]);
                          return this;
                      }
                      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
                  }),
                  (u._remove = function (t, i) {
                      e.prototype._remove.call(this, t, i);
                      var s = this._last;
                      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && ((this._time = this.duration()), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = 0), this;
                  }),
                  (u.append = function (t, e) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
                  }),
                  (u.insert = u.insertMultiple = function (t, e, i, s) {
                      return this.add(t, e || 0, i, s);
                  }),
                  (u.appendMultiple = function (t, e, i, s) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
                  }),
                  (u.addLabel = function (t, e) {
                      return (this._labels[t] = this._parseTimeOrLabel(e)), this;
                  }),
                  (u.addPause = function (t, e, i, s) {
                      return this.call(h, ["{self}", e, i, s], this, t);
                  }),
                  (u.removeLabel = function (t) {
                      return delete this._labels[t], this;
                  }),
                  (u.getLabelTime = function (t) {
                      return null != this._labels[t] ? this._labels[t] : -1;
                  }),
                  (u._parseTimeOrLabel = function (e, i, s, r) {
                      var n;
                      if (r instanceof t && r.timeline === this) this.remove(r);
                      else if (r && (r instanceof Array || (r.push && a(r)))) for (n = r.length; --n > -1; ) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                      if (((i = i || 0), "string" != typeof e || (!isNaN(e) && null == this._labels[e]))) null == e && (e = this.duration());
                      else {
                          if (-1 === (n = e.indexOf("="))) return null == this._labels[e] ? (s ? (this._labels[e] = this.duration() + i) : i) : this._labels[e] + i;
                          (i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1))), (e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration());
                      }
                      return Number(e) + i;
                  }),
                  (u.seek = function (t, e) {
                      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e);
                  }),
                  (u.stop = function () {
                      return this.paused(!0);
                  }),
                  (u.gotoAndPlay = function (t, e) {
                      return this.play(t, e);
                  }),
                  (u.gotoAndStop = function (t, e) {
                      return this.pause(t, e);
                  }),
                  (u.render = function (t, e, i) {
                      this._gc && this._enabled(!0, !1);
                      var s,
                          n,
                          a,
                          l,
                          h,
                          p = this._dirty ? this.totalDuration() : this._totalDuration,
                          u = this._time,
                          c = this._startTime,
                          _ = this._timeScale,
                          f = this._paused;
                      if (
                          (t >= p
                              ? ((this._totalTime = this._time = p),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((n = !0),
                                    (l = "onComplete"),
                                    0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && ((h = !0), this._rawPrevTime > r && (l = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !e || t ? t : r),
                                (t = p + 1e-6))
                              : 1e-7 > t
                              ? ((this._totalTime = this._time = 0),
                                (0 !== u || (0 === this._duration && (this._rawPrevTime > r || (0 > t && this._rawPrevTime >= 0)))) && ((l = "onReverseComplete"), (n = this._reversed)),
                                0 > t
                                    ? ((this._active = !1), 0 === this._duration && this._rawPrevTime >= 0 && this._first && (h = !0), (this._rawPrevTime = t))
                                    : ((this._rawPrevTime = this._duration || !e || t ? t : r), (t = 0), this._initted || (h = !0)))
                              : (this._totalTime = this._time = this._rawPrevTime = t),
                          (this._time !== u && this._first) || i || h)
                      ) {
                          if (
                              (this._initted || (this._initted = !0),
                              this._active || (!this._paused && this._time !== u && t > 0 && (this._active = !0)),
                              0 === u && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)),
                              this._time >= u)
                          )
                              for (s = this._first; s && ((a = s._next), !this._paused || f); )
                                  (s._active || (s._startTime <= this._time && !s._paused && !s._gc)) &&
                                      (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                      (s = a);
                          else
                              for (s = this._last; s && ((a = s._prev), !this._paused || f); )
                                  (s._active || (u >= s._startTime && !s._paused && !s._gc)) &&
                                      (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                      (s = a);
                          this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)),
                              l &&
                                  (this._gc ||
                                      ((c === this._startTime || _ !== this._timeScale) &&
                                          (0 === this._time || p >= this.totalDuration()) &&
                                          (n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || o))));
                      }
                  }),
                  (u._hasPausedChild = function () {
                      for (var t = this._first; t; ) {
                          if (t._paused || (t instanceof s && t._hasPausedChild())) return !0;
                          t = t._next;
                      }
                      return !1;
                  }),
                  (u.getChildren = function (t, e, s, r) {
                      r = r || -9999999999;
                      for (var n = [], a = this._first, o = 0; a; )
                          r > a._startTime || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== s && (n[o++] = a), !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, s))).length))), (a = a._next);
                      return n;
                  }),
                  (u.getTweensOf = function (t, e) {
                      for (var s = i.getTweensOf(t), r = s.length, n = [], a = 0; --r > -1; ) (s[r].timeline === this || (e && this._contains(s[r]))) && (n[a++] = s[r]);
                      return n;
                  }),
                  (u._contains = function (t) {
                      for (var e = t.timeline; e; ) {
                          if (e === this) return !0;
                          e = e.timeline;
                      }
                      return !1;
                  }),
                  (u.shiftChildren = function (t, e, i) {
                      i = i || 0;
                      for (var s, r = this._first, n = this._labels; r; ) r._startTime >= i && (r._startTime += t), (r = r._next);
                      if (e) for (s in n) n[s] >= i && (n[s] += t);
                      return this._uncache(!0);
                  }),
                  (u._kill = function (t, e) {
                      if (!t && !e) return this._enabled(!1, !1);
                      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1; ) i[s]._kill(t, e) && (r = !0);
                      return r;
                  }),
                  (u.clear = function (t) {
                      var e = this.getChildren(!1, !0, !0),
                          i = e.length;
                      for (this._time = this._totalTime = 0; --i > -1; ) e[i]._enabled(!1, !1);
                      return !1 !== t && (this._labels = {}), this._uncache(!0);
                  }),
                  (u.invalidate = function () {
                      for (var t = this._first; t; ) t.invalidate(), (t = t._next);
                      return this;
                  }),
                  (u._enabled = function (t, i) {
                      if (t === this._gc) for (var s = this._first; s; ) s._enabled(t, !0), (s = s._next);
                      return e.prototype._enabled.call(this, t, i);
                  }),
                  (u.duration = function (t) {
                      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
                  }),
                  (u.totalDuration = function (t) {
                      if (!arguments.length) {
                          if (this._dirty) {
                              for (var e, i, s = 0, r = this._last, n = 999999999999; r; )
                                  (e = r._prev),
                                      r._dirty && r.totalDuration(),
                                      r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : (n = r._startTime),
                                      0 > r._startTime &&
                                          !r._paused &&
                                          ((s -= r._startTime), this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), (n = 0)),
                                      (i = r._startTime + r._totalDuration / r._timeScale) > s && (s = i),
                                      (r = e);
                              (this._duration = this._totalDuration = s), (this._dirty = !1);
                          }
                          return this._totalDuration;
                      }
                      return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
                  }),
                  (u.usesFrames = function () {
                      for (var e = this._timeline; e._timeline; ) e = e._timeline;
                      return e === t._rootFramesTimeline;
                  }),
                  (u.rawTime = function () {
                      return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
                  }),
                  s
              );
          },
          !0
      ),
      window._gsDefine(
          "TimelineMax",
          ["TimelineLite", "TweenLite", "easing.Ease"],
          function (t, e, i) {
              var s = function (e) {
                      t.call(this, e), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = !0 === this.vars.yoyo), (this._dirty = !0);
                  },
                  r = 1e-10,
                  n = [],
                  a = new i(null, null, 1, 0),
                  o = (s.prototype = new t());
              return (
                  (o.constructor = s),
                  (o.kill()._gc = !1),
                  (s.version = "1.11.0"),
                  (o.invalidate = function () {
                      return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), t.prototype.invalidate.call(this);
                  }),
                  (o.addCallback = function (t, i, s, r) {
                      return this.add(e.delayedCall(0, t, s, r), i);
                  }),
                  (o.removeCallback = function (t, e) {
                      if (t)
                          if (null == e) this._kill(null, t);
                          else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1; ) i[s]._startTime === r && i[s]._enabled(!1, !1);
                      return this;
                  }),
                  (o.tweenTo = function (t, i) {
                      i = i || {};
                      var s,
                          r,
                          o = { ease: a, overwrite: 2, useFrames: this.usesFrames(), immediateRender: !1 };
                      for (s in i) o[s] = i[s];
                      return (
                          (o.time = this._parseTimeOrLabel(t)),
                          (r = new e(this, Math.abs(Number(o.time) - this._time) / this._timeScale || 0.001, o)),
                          (o.onStart = function () {
                              r.target.paused(!0), r.vars.time !== r.target.time() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || r, i.onStartParams || n);
                          }),
                          r
                      );
                  }),
                  (o.tweenFromTo = function (t, e, i) {
                      (i = i || {}), (t = this._parseTimeOrLabel(t)), (i.startAt = { onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this }), (i.immediateRender = !1 !== i.immediateRender);
                      var s = this.tweenTo(e, i);
                      return s.duration(Math.abs(s.vars.time - t) / this._timeScale || 0.001);
                  }),
                  (o.render = function (t, e, i) {
                      this._gc && this._enabled(!0, !1);
                      var s,
                          a,
                          o,
                          l,
                          h,
                          p,
                          u = this._dirty ? this.totalDuration() : this._totalDuration,
                          c = this._duration,
                          _ = this._time,
                          f = this._totalTime,
                          d = this._startTime,
                          m = this._timeScale,
                          g = this._rawPrevTime,
                          v = this._paused,
                          y = this._cycle;
                      if (
                          (t >= u
                              ? (this._locked || ((this._totalTime = u), (this._cycle = this._repeat)),
                                this._reversed || this._hasPausedChild() || ((a = !0), (l = "onComplete"), 0 === this._duration && (0 === t || 0 > g || g === r) && g !== t && this._first && ((h = !0), g > r && (l = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !e || t ? t : r),
                                this._yoyo && 0 != (1 & this._cycle) ? (this._time = t = 0) : ((this._time = c), (t = c + 1e-6)))
                              : 1e-7 > t
                              ? (this._locked || (this._totalTime = this._cycle = 0),
                                (this._time = 0),
                                (0 !== _ || (0 === c && (g > r || (0 > t && g >= 0)) && !this._locked)) && ((l = "onReverseComplete"), (a = this._reversed)),
                                0 > t ? ((this._active = !1), 0 === c && g >= 0 && this._first && (h = !0), (this._rawPrevTime = t)) : ((this._rawPrevTime = c || !e || t ? t : r), (t = 0), this._initted || (h = !0)))
                              : (0 === c && 0 > g && (h = !0),
                                (this._time = this._rawPrevTime = t),
                                this._locked ||
                                    ((this._totalTime = t),
                                    0 !== this._repeat &&
                                        ((p = c + this._repeatDelay),
                                        (this._cycle = (this._totalTime / p) >> 0),
                                        0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--,
                                        (this._time = this._totalTime - this._cycle * p),
                                        this._yoyo && 0 != (1 & this._cycle) && (this._time = c - this._time),
                                        this._time > c ? ((this._time = c), (t = c + 1e-6)) : 0 > this._time ? (this._time = t = 0) : (t = this._time)))),
                          this._cycle !== y && !this._locked)
                      ) {
                          var x = this._yoyo && 0 != (1 & y),
                              b = x === (this._yoyo && 0 != (1 & this._cycle)),
                              T = this._totalTime,
                              w = this._cycle,
                              P = this._rawPrevTime,
                              k = this._time;
                          if (
                              ((this._totalTime = y * c),
                              y > this._cycle ? (x = !x) : (this._totalTime += c),
                              (this._time = _),
                              (this._rawPrevTime = 0 === c ? g - 1e-5 : g),
                              (this._cycle = y),
                              (this._locked = !0),
                              (_ = x ? 0 : c),
                              this.render(_, e, 0 === c),
                              e || this._gc || (this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n)),
                              b && ((_ = x ? c + 1e-6 : -1e-6), this.render(_, !0, !1)),
                              (this._locked = !1),
                              this._paused && !v)
                          )
                              return;
                          (this._time = k), (this._totalTime = T), (this._cycle = w), (this._rawPrevTime = P);
                      }
                      if ((this._time !== _ && this._first) || i || h) {
                          if (
                              (this._initted || (this._initted = !0),
                              this._active || (!this._paused && this._totalTime !== f && t > 0 && (this._active = !0)),
                              0 === f && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)),
                              this._time >= _)
                          )
                              for (s = this._first; s && ((o = s._next), !this._paused || v); )
                                  (s._active || (s._startTime <= this._time && !s._paused && !s._gc)) &&
                                      (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                      (s = o);
                          else
                              for (s = this._last; s && ((o = s._prev), !this._paused || v); )
                                  (s._active || (_ >= s._startTime && !s._paused && !s._gc)) &&
                                      (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                                      (s = o);
                          this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)),
                              l &&
                                  (this._locked ||
                                      this._gc ||
                                      ((d === this._startTime || m !== this._timeScale) &&
                                          (0 === this._time || u >= this.totalDuration()) &&
                                          (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !e && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || n))));
                      } else f !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n));
                  }),
                  (o.getActive = function (t, e, i) {
                      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                      var s,
                          r,
                          n = [],
                          a = this.getChildren(t, e, i),
                          o = 0,
                          l = a.length;
                      for (s = 0; l > s; s++) (r = a[s]).isActive() && (n[o++] = r);
                      return n;
                  }),
                  (o.getLabelAfter = function (t) {
                      t || (0 !== t && (t = this._time));
                      var e,
                          i = this.getLabelsArray(),
                          s = i.length;
                      for (e = 0; s > e; e++) if (i[e].time > t) return i[e].name;
                      return null;
                  }),
                  (o.getLabelBefore = function (t) {
                      null == t && (t = this._time);
                      for (var e = this.getLabelsArray(), i = e.length; --i > -1; ) if (t > e[i].time) return e[i].name;
                      return null;
                  }),
                  (o.getLabelsArray = function () {
                      var t,
                          e = [],
                          i = 0;
                      for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                      return (
                          e.sort(function (t, e) {
                              return t.time - e.time;
                          }),
                          e
                      );
                  }),
                  (o.progress = function (t) {
                      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
                  }),
                  (o.totalProgress = function (t) {
                      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
                  }),
                  (o.totalDuration = function (e) {
                      return arguments.length
                          ? -1 === this._repeat
                              ? this
                              : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
                          : (this._dirty && (t.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                  }),
                  (o.time = function (t, e) {
                      return arguments.length
                          ? (this._dirty && this.totalDuration(),
                            t > this._duration && (t = this._duration),
                            this._yoyo && 0 != (1 & this._cycle) ? (t = this._duration - t + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                            this.totalTime(t, e))
                          : this._time;
                  }),
                  (o.repeat = function (t) {
                      return arguments.length ? ((this._repeat = t), this._uncache(!0)) : this._repeat;
                  }),
                  (o.repeatDelay = function (t) {
                      return arguments.length ? ((this._repeatDelay = t), this._uncache(!0)) : this._repeatDelay;
                  }),
                  (o.yoyo = function (t) {
                      return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                  }),
                  (o.currentLabel = function (t) {
                      return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
                  }),
                  s
              );
          },
          !0
      ),
      (t = 180 / Math.PI),
      (e = []),
      (i = []),
      (s = []),
      (r = {}),
      (n = function (t, e, i, s) {
          (this.a = t), (this.b = e), (this.c = i), (this.d = s), (this.da = s - t), (this.ca = i - t), (this.ba = e - t);
      }),
      (a = function (t, e, i, s) {
          var r = { a: t },
              n = {},
              a = {},
              o = { c: s },
              l = (t + e) / 2,
              h = (e + i) / 2,
              p = (i + s) / 2,
              u = (l + h) / 2,
              c = (h + p) / 2,
              _ = (c - u) / 8;
          return (r.b = l + (t - l) / 4), (n.b = u + _), (r.c = n.a = (r.b + n.b) / 2), (n.c = a.a = (u + c) / 2), (a.b = c - _), (o.b = p + (s - p) / 4), (a.c = o.a = (a.b + o.b) / 2), [r, n, a, o];
      }),
      (o = function (t, r, n, o, l) {
          var h,
              p,
              u,
              c,
              _,
              f,
              d,
              m,
              g,
              v,
              y,
              x,
              b,
              T = t.length - 1,
              w = 0,
              P = t[0].a;
          for (h = 0; T > h; h++)
              (p = (_ = t[w]).a),
                  (u = _.d),
                  (c = t[w + 1].d),
                  l
                      ? ((y = e[h]),
                        (b = (0.25 * ((x = i[h]) + y) * r) / (o ? 0.5 : s[h] || 0.5)),
                        (m = u - ((f = u - (u - p) * (o ? 0.5 * r : 0 !== y ? b / y : 0)) + ((((d = u + (c - u) * (o ? 0.5 * r : 0 !== x ? b / x : 0)) - f) * ((3 * y) / (y + x) + 0.5)) / 4 || 0))))
                      : (m = u - ((f = u - 0.5 * (u - p) * r) + (d = u + 0.5 * (c - u) * r)) / 2),
                  (f += m),
                  (d += m),
                  (_.c = g = f),
                  (_.b = 0 !== h ? P : (P = _.a + 0.6 * (_.c - _.a))),
                  (_.da = u - p),
                  (_.ca = g - p),
                  (_.ba = P - p),
                  n ? ((v = a(p, P, g, u)), t.splice(w, 1, v[0], v[1], v[2], v[3]), (w += 4)) : w++,
                  (P = d);
          ((_ = t[w]).b = P), (_.c = P + 0.4 * (_.d - P)), (_.da = _.d - _.a), (_.ca = _.c - _.a), (_.ba = P - _.a), n && ((v = a(_.a, P, _.c, _.d)), t.splice(w, 1, v[0], v[1], v[2], v[3]));
      }),
      (l = function (t, s, r, a) {
          var o,
              l,
              h,
              p,
              u,
              c,
              _ = [];
          if (a) for (l = (t = [a].concat(t)).length; --l > -1; ) "string" == typeof (c = t[l][s]) && "=" === c.charAt(1) && (t[l][s] = a[s] + Number(c.charAt(0) + c.substr(2)));
          if (0 > (o = t.length - 2)) return (_[0] = new n(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s])), _;
          for (l = 0; o > l; l++) (h = t[l][s]), (p = t[l + 1][s]), (_[l] = new n(h, 0, 0, p)), r && ((u = t[l + 2][s]), (e[l] = (e[l] || 0) + (p - h) * (p - h)), (i[l] = (i[l] || 0) + (u - p) * (u - p)));
          return (_[l] = new n(t[l][s], 0, 0, t[l + 1][s])), _;
      }),
      (h = function (t, n, a, h, p, u) {
          var c,
              _,
              f,
              d,
              m,
              g,
              v,
              y,
              x = {},
              b = [],
              T = u || t[0];
          for (_ in ((p = "string" == typeof p ? "," + p + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
          null == n && (n = 1),
          t[0]))
              b.push(_);
          if (t.length > 1) {
              for (y = t[t.length - 1], v = !0, c = b.length; --c > -1; )
                  if (((_ = b[c]), Math.abs(T[_] - y[_]) > 0.05)) {
                      v = !1;
                      break;
                  }
              v && ((t = t.concat()), u && t.unshift(u), t.push(t[1]), (u = t[t.length - 3]));
          }
          for (e.length = i.length = s.length = 0, c = b.length; --c > -1; ) (_ = b[c]), (r[_] = -1 !== p.indexOf("," + _ + ",")), (x[_] = l(t, _, r[_], u));
          for (c = e.length; --c > -1; ) (e[c] = Math.sqrt(e[c])), (i[c] = Math.sqrt(i[c]));
          if (!h) {
              for (c = b.length; --c > -1; ) if (r[_]) for (g = (f = x[b[c]]).length - 1, d = 0; g > d; d++) (m = f[d + 1].da / i[d] + f[d].da / e[d]), (s[d] = (s[d] || 0) + m * m);
              for (c = s.length; --c > -1; ) s[c] = Math.sqrt(s[c]);
          }
          for (c = b.length, d = a ? 4 : 1; --c > -1; ) (f = x[(_ = b[c])]), o(f, n, a, h, r[_]), v && (f.splice(0, d), f.splice(f.length - d, d));
          return x;
      }),
      (p = function (t, e, i) {
          var s,
              r,
              a,
              o,
              l,
              h,
              p,
              u,
              c,
              _,
              f,
              d = {},
              m = "cubic" === (e = e || "soft") ? 3 : 2,
              g = "soft" === e,
              v = [];
          if ((g && i && (t = [i].concat(t)), null == t || m + 1 > t.length)) throw "invalid Bezier data";
          for (c in t[0]) v.push(c);
          for (h = v.length; --h > -1; ) {
              for (d[(c = v[h])] = l = [], _ = 0, u = t.length, p = 0; u > p; p++)
                  (s = null == i ? t[p][c] : "string" == typeof (f = t[p][c]) && "=" === f.charAt(1) ? i[c] + Number(f.charAt(0) + f.substr(2)) : Number(f)), g && p > 1 && u - 1 > p && (l[_++] = (s + l[_ - 2]) / 2), (l[_++] = s);
              for (u = _ - m + 1, _ = 0, p = 0; u > p; p += m) (s = l[p]), (r = l[p + 1]), (a = l[p + 2]), (o = 2 === m ? 0 : l[p + 3]), (l[_++] = f = 3 === m ? new n(s, r, a, o) : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a));
              l.length = _;
          }
          return d;
      }),
      (u = function (t, e, i) {
          for (var s, r, n, a, o, l, h, p, u, c, _, f = 1 / i, d = t.length; --d > -1; )
              for (n = (c = t[d]).a, a = c.d - n, o = c.c - n, l = c.b - n, s = r = 0, p = 1; i >= p; p++) (s = r - (r = ((h = f * p) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h)), (e[(_ = d * i + p - 1)] = (e[_] || 0) + s * s);
      }),
      (c = function (t, e) {
          var i,
              s,
              r,
              n,
              a = [],
              o = [],
              l = 0,
              h = 0,
              p = (e = e >> 0 || 6) - 1,
              c = [],
              _ = [];
          for (i in t) u(t[i], a, e);
          for (r = a.length, s = 0; r > s; s++) (l += Math.sqrt(a[s])), (_[(n = s % e)] = l), n === p && ((h += l), (c[(n = (s / e) >> 0)] = _), (o[n] = h), (l = 0), (_ = []));
          return { length: h, lengths: o, segments: c };
      }),
      (_ = window._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          API: 2,
          global: !0,
          init: function (t, e, i) {
              (this._target = t), e instanceof Array && (e = { values: e }), (this._func = {}), (this._round = {}), (this._props = []), (this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
              var s,
                  r,
                  n,
                  a,
                  o,
                  l = e.values || [],
                  u = {},
                  _ = l[0],
                  f = e.autoRotate || i.vars.orientToBezier;
              for (s in ((this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]]) : null), _)) this._props.push(s);
              for (n = this._props.length; --n > -1; )
                  (s = this._props[n]),
                      this._overwriteProps.push(s),
                      (r = this._func[s] = "function" == typeof t[s]),
                      (u[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s])),
                      o || (u[s] !== l[0][s] && (o = u));
              if (
                  ((this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(l, e.type, u)),
                  (this._segCount = this._beziers[s].length),
                  this._timeRes)
              ) {
                  var d = c(this._beziers, this._timeRes);
                  (this._length = d.length),
                      (this._lengths = d.lengths),
                      (this._segments = d.segments),
                      (this._l1 = this._li = this._s1 = this._si = 0),
                      (this._l2 = this._lengths[0]),
                      (this._curSeg = this._segments[0]),
                      (this._s2 = this._curSeg[0]),
                      (this._prec = 1 / this._curSeg.length);
              }
              if ((f = this._autoRotate))
                  for (f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1; )
                      for (a = 0; 3 > a; a++) (s = f[n][a]), (this._func[s] = "function" == typeof t[s] && t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]);
              return !0;
          },
          set: function (e) {
              var i,
                  s,
                  r,
                  n,
                  a,
                  o,
                  l,
                  h,
                  p,
                  u,
                  c = this._segCount,
                  _ = this._func,
                  f = this._target;
              if (this._timeRes) {
                  if (((p = this._lengths), (u = this._curSeg), (e *= this._length), (r = this._li), e > this._l2 && c - 1 > r)) {
                      for (h = c - 1; h > r && e >= (this._l2 = p[++r]); );
                      (this._l1 = p[r - 1]), (this._li = r), (this._curSeg = u = this._segments[r]), (this._s2 = u[(this._s1 = this._si = 0)]);
                  } else if (this._l1 > e && r > 0) {
                      for (; r > 0 && (this._l1 = p[--r]) >= e; );
                      0 === r && this._l1 > e ? (this._l1 = 0) : r++, (this._l2 = p[r]), (this._li = r), (this._curSeg = u = this._segments[r]), (this._s1 = u[(this._si = u.length - 1) - 1] || 0), (this._s2 = u[this._si]);
                  }
                  if (((i = r), (e -= this._l1), (r = this._si), e > this._s2 && u.length - 1 > r)) {
                      for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]); );
                      (this._s1 = u[r - 1]), (this._si = r);
                  } else if (this._s1 > e && r > 0) {
                      for (; r > 0 && (this._s1 = u[--r]) >= e; );
                      0 === r && this._s1 > e ? (this._s1 = 0) : r++, (this._s2 = u[r]), (this._si = r);
                  }
                  o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
              } else o = (e - (i = 0 > e ? 0 : e >= 1 ? c - 1 : (c * e) >> 0) * (1 / c)) * c;
              for (s = 1 - o, r = this._props.length; --r > -1; )
                  (n = this._props[r]), (l = (o * o * (a = this._beziers[n][i]).da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a), this._round[n] && (l = (l + (l > 0 ? 0.5 : -0.5)) >> 0), _[n] ? f[n](l) : (f[n] = l);
              if (this._autoRotate) {
                  var d,
                      m,
                      g,
                      v,
                      y,
                      x,
                      b,
                      T = this._autoRotate;
                  for (r = T.length; --r > -1; )
                      (n = T[r][2]),
                          (x = T[r][3] || 0),
                          (b = !0 === T[r][4] ? 1 : t),
                          (a = this._beziers[T[r][0]]),
                          (d = this._beziers[T[r][1]]),
                          a &&
                              d &&
                              ((a = a[i]),
                              (d = d[i]),
                              (m = a.a + (a.b - a.a) * o),
                              (m += ((v = a.b + (a.c - a.b) * o) - m) * o),
                              (v += (a.c + (a.d - a.c) * o - v) * o),
                              (g = d.a + (d.b - d.a) * o),
                              (g += ((y = d.b + (d.c - d.b) * o) - g) * o),
                              (y += (d.c + (d.d - d.c) * o - y) * o),
                              (l = Math.atan2(y - g, v - m) * b + x),
                              _[n] ? f[n](l) : (f[n] = l));
              }
          },
      })),
      (f = _.prototype),
      (_.bezierThrough = h),
      (_.cubicToQuadratic = a),
      (_._autoCSS = !0),
      (_.quadraticToCubic = function (t, e, i) {
          return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
      }),
      (_._cssRegister = function () {
          var t = window._gsDefine.globals.CSSPlugin;
          if (t) {
              var e = t._internals,
                  i = e._parseToProxy,
                  s = e._setPluginRatio,
                  r = e.CSSPropTween;
              e._registerComplexSpecialProp("bezier", {
                  parser: function (t, e, n, a, o, l) {
                      e instanceof Array && (e = { values: e }), (l = new _());
                      var h,
                          p,
                          u,
                          c = e.values,
                          f = c.length - 1,
                          d = [],
                          m = {};
                      if (0 > f) return o;
                      for (h = 0; f >= h; h++) (u = i(t, c[h], a, o, l, f !== h)), (d[h] = u.end);
                      for (p in e) m[p] = e[p];
                      return (
                          (m.values = d),
                          ((o = new r(t, "bezier", 0, 0, u.pt, 2)).data = u),
                          (o.plugin = l),
                          (o.setRatio = s),
                          0 === m.autoRotate && (m.autoRotate = !0),
                          !m.autoRotate ||
                              m.autoRotate instanceof Array ||
                              ((h = !0 === m.autoRotate ? 0 : Number(m.autoRotate)), (m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]])),
                          m.autoRotate && (a._transform || a._enableTransforms(!1), (u.autoRotate = a._target._gsTransform)),
                          l._onInitTween(u.proxy, m, a._tween),
                          o
                      );
                  },
              });
          }
      }),
      (f._roundProps = function (t, e) {
          for (var i = this._overwriteProps, s = i.length; --s > -1; ) (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
      }),
      (f._kill = function (t) {
          var e,
              i,
              s = this._props;
          for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1; ) s[i] === e && s.splice(i, 1);
          return this._super._kill.call(this, t);
      }),
      window._gsDefine(
          "plugins.CSSPlugin",
          ["plugins.TweenPlugin", "TweenLite"],
          function (t, e) {
              var i,
                  s,
                  r,
                  n,
                  a = function () {
                      t.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = a.prototype.setRatio);
                  },
                  o = {},
                  l = (a.prototype = new t("css"));
              (l.constructor = a),
                  (a.version = "1.11.2"),
                  (a.API = 2),
                  (a.defaultTransformPerspective = 0),
                  (l = "px"),
                  (a.suffixMap = { top: l, right: l, bottom: l, left: l, width: l, height: l, fontSize: l, padding: l, margin: l, perspective: l });
              var h,
                  p,
                  u,
                  c,
                  _,
                  f,
                  d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                  m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                  g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                  v = /[^\d\-\.]/g,
                  y = /(?:\d|\-|\+|=|#|\.)*/g,
                  x = /opacity *= *([^)]*)/,
                  b = /opacity:([^;]*)/,
                  T = /alpha\(opacity *=.+?\)/i,
                  w = /^(rgb|hsl)/,
                  P = /([A-Z])/g,
                  k = /-([a-z])/gi,
                  S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                  C = function (t, e) {
                      return e.toUpperCase();
                  },
                  I = /(?:Left|Right|Width)/i,
                  L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                  R = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                  D = /,(?=[^\)]*(?:\(|$))/gi,
                  O = Math.PI / 180,
                  A = 180 / Math.PI,
                  U = {},
                  W = document,
                  M = W.createElement("div"),
                  j = W.createElement("img"),
                  N = (a._internals = { _specialProps: o }),
                  E = navigator.userAgent,
                  F = (function () {
                      var t,
                          e = E.indexOf("Android"),
                          i = W.createElement("div");
                      return (
                          (u = -1 !== E.indexOf("Safari") && -1 === E.indexOf("Chrome") && (-1 === e || Number(E.substr(e + 8, 1)) > 3)),
                          (_ = u && 6 > Number(E.substr(E.indexOf("Version/") + 8, 1))),
                          (c = -1 !== E.indexOf("Firefox")),
                          /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(E) && (f = parseFloat(RegExp.$1)),
                          (i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>"),
                          !!(t = i.getElementsByTagName("a")[0]) && /^0.55/.test(t.style.opacity)
                      );
                  })(),
                  z = function (t) {
                      return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                  },
                  V = function (t) {
                      window.console && console.log(t);
                  },
                  X = "",
                  B = "",
                  $ = function (t, e) {
                      var i,
                          s,
                          r = (e = e || M).style;
                      if (void 0 !== r[t]) return t;
                      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t]; );
                      return s >= 0 ? ((X = "-" + (B = 3 === s ? "ms" : i[s]).toLowerCase() + "-"), B + t) : null;
                  },
                  Y = W.defaultView ? W.defaultView.getComputedStyle : function () {},
                  H = (a.getStyle = function (t, e, i, s, r) {
                      var n;
                      return F || "opacity" !== e
                          ? (!s && t.style[e] ? (n = t.style[e]) : (i = i || Y(t, null)) ? (n = (t = i.getPropertyValue(e.replace(P, "-$1").toLowerCase())) || i.length ? t : i[e]) : t.currentStyle && (n = t.currentStyle[e]),
                            null == r || (n && "none" !== n && "auto" !== n && "auto auto" !== n) ? n : r)
                          : z(t);
                  }),
                  q = function (t, e, i, s, r) {
                      if ("px" === s || !s) return i;
                      if ("auto" === s || !i) return 0;
                      var n,
                          a = I.test(e),
                          o = t,
                          l = M.style,
                          h = 0 > i;
                      return (
                          h && (i = -i),
                          "%" === s && -1 !== e.indexOf("border")
                              ? (n = (i / 100) * (a ? t.clientWidth : t.clientHeight))
                              : ((l.cssText = "border:0 solid red;position:" + H(t, "position") + ";line-height:0;"),
                                "%" !== s && o.appendChild ? (l[a ? "borderLeftWidth" : "borderTopWidth"] = i + s) : ((o = t.parentNode || W.body), (l[a ? "width" : "height"] = i + s)),
                                o.appendChild(M),
                                (n = parseFloat(M[a ? "offsetWidth" : "offsetHeight"])),
                                o.removeChild(M),
                                0 !== n || r || (n = q(t, e, i, s, !0))),
                          h ? -n : n
                      );
                  },
                  G = function (t, e, i) {
                      if ("absolute" !== H(t, "position", i)) return 0;
                      var s = "left" === e ? "Left" : "Top",
                          r = H(t, "margin" + s, i);
                      return t["offset" + s] - (q(t, e, parseFloat(r), r.replace(y, "")) || 0);
                  },
                  Z = function (t, e) {
                      var i,
                          s,
                          r = {};
                      if ((e = e || Y(t, null)))
                          if ((i = e.length)) for (; --i > -1; ) r[e[i].replace(k, C)] = e.getPropertyValue(e[i]);
                          else for (i in e) r[i] = e[i];
                      else if ((e = t.currentStyle || t.style)) for (i in e) "string" == typeof i && void 0 !== r[i] && (r[i.replace(k, C)] = e[i]);
                      return (
                          F || (r.opacity = z(t)),
                          (s = wt(t, e, !1)),
                          (r.rotation = s.rotation),
                          (r.skewX = s.skewX),
                          (r.scaleX = s.scaleX),
                          (r.scaleY = s.scaleY),
                          (r.x = s.x),
                          (r.y = s.y),
                          Tt && ((r.z = s.z), (r.rotationX = s.rotationX), (r.rotationY = s.rotationY), (r.scaleZ = s.scaleZ)),
                          r.filters && delete r.filters,
                          r
                      );
                  },
                  K = function (t, e, i, s, r) {
                      var n,
                          a,
                          o,
                          l = {},
                          h = t.style;
                      for (a in i)
                          "cssText" !== a &&
                              "length" !== a &&
                              isNaN(a) &&
                              (e[a] !== (n = i[a]) || (r && r[a])) &&
                              -1 === a.indexOf("Origin") &&
                              ("number" == typeof n || "string" == typeof n) &&
                              ((l[a] = "auto" !== n || ("left" !== a && "top" !== a) ? (("" !== n && "auto" !== n && "none" !== n) || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0) : G(t, a)),
                              void 0 !== h[a] && (o = new ut(h, a, h[a], o)));
                      if (s) for (a in s) "className" !== a && (l[a] = s[a]);
                      return { difs: l, firstMPT: o };
                  },
                  J = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                  Q = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                  tt = function (t, e, i) {
                      var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                          r = J[e],
                          n = r.length;
                      for (i = i || Y(t, null); --n > -1; ) (s -= parseFloat(H(t, "padding" + r[n], i, !0)) || 0), (s -= parseFloat(H(t, "border" + r[n] + "Width", i, !0)) || 0);
                      return s;
                  },
                  et = function (t, e) {
                      (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                      var i = t.split(" "),
                          s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                          r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                      return (
                          null == r ? (r = "0") : "center" === r && (r = "50%"),
                          ("center" === s || (isNaN(parseFloat(s)) && -1 === (s + "").indexOf("="))) && (s = "50%"),
                          e && ((e.oxp = -1 !== s.indexOf("%")), (e.oyp = -1 !== r.indexOf("%")), (e.oxr = "=" === s.charAt(1)), (e.oyr = "=" === r.charAt(1)), (e.ox = parseFloat(s.replace(v, ""))), (e.oy = parseFloat(r.replace(v, "")))),
                          s + " " + r + (i.length > 2 ? " " + i[2] : "")
                      );
                  },
                  it = function (t, e) {
                      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
                  },
                  st = function (t, e) {
                      return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t);
                  },
                  rt = function (t, e, i, s) {
                      var r, n, a, o;
                      return (
                          null == t
                              ? (o = e)
                              : "number" == typeof t
                              ? (o = t)
                              : ((r = 360),
                                (n = t.split("_")),
                                (a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : A) - ("=" === t.charAt(1) ? 0 : e)),
                                n.length &&
                                    (s && (s[i] = e + a),
                                    -1 !== t.indexOf("short") && (a %= r) !== a % (r / 2) && (a = 0 > a ? a + r : a - r),
                                    -1 !== t.indexOf("_cw") && 0 > a ? (a = ((a + 9999999999 * r) % r) - (0 | (a / r)) * r) : -1 !== t.indexOf("ccw") && a > 0 && (a = ((a - 9999999999 * r) % r) - (0 | (a / r)) * r)),
                                (o = e + a)),
                          1e-6 > o && o > -1e-6 && (o = 0),
                          o
                      );
                  },
                  nt = {
                      aqua: [0, 255, 255],
                      lime: [0, 255, 0],
                      silver: [192, 192, 192],
                      black: [0, 0, 0],
                      maroon: [128, 0, 0],
                      teal: [0, 128, 128],
                      blue: [0, 0, 255],
                      navy: [0, 0, 128],
                      white: [255, 255, 255],
                      fuchsia: [255, 0, 255],
                      olive: [128, 128, 0],
                      yellow: [255, 255, 0],
                      orange: [255, 165, 0],
                      gray: [128, 128, 128],
                      purple: [128, 0, 128],
                      green: [0, 128, 0],
                      red: [255, 0, 0],
                      pink: [255, 192, 203],
                      cyan: [0, 255, 255],
                      transparent: [255, 255, 255, 0],
                  },
                  at = function (t, e, i) {
                      return 0 | (255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + 6 * (i - e) * t : 0.5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + 0.5);
                  },
                  ot = function (t) {
                      var e, i, s, r, n, a;
                      return t && "" !== t
                          ? "number" == typeof t
                              ? [t >> 16, 255 & (t >> 8), 255 & t]
                              : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                                nt[t]
                                    ? nt[t]
                                    : "#" === t.charAt(0)
                                    ? (4 === t.length && (t = "#" + (e = t.charAt(1)) + e + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s), [(t = parseInt(t.substr(1), 16)) >> 16, 255 & (t >> 8), 255 & t])
                                    : "hsl" === t.substr(0, 3)
                                    ? ((t = t.match(d)),
                                      (r = (Number(t[0]) % 360) / 360),
                                      (n = Number(t[1]) / 100),
                                      (e = 2 * (a = Number(t[2]) / 100) - (i = 0.5 >= a ? a * (n + 1) : a + n - a * n)),
                                      t.length > 3 && (t[3] = Number(t[3])),
                                      (t[0] = at(r + 1 / 3, e, i)),
                                      (t[1] = at(r, e, i)),
                                      (t[2] = at(r - 1 / 3, e, i)),
                                      t)
                                    : (((t = t.match(d) || nt.transparent)[0] = Number(t[0])), (t[1] = Number(t[1])), (t[2] = Number(t[2])), t.length > 3 && (t[3] = Number(t[3])), t))
                          : nt.black;
                  },
                  lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
              for (l in nt) lt += "|" + l + "\\b";
              lt = RegExp(lt + ")", "gi");
              var ht = function (t, e, i, s) {
                      if (null == t)
                          return function (t) {
                              return t;
                          };
                      var r,
                          n = e ? (t.match(lt) || [""])[0] : "",
                          a = t.split(n).join("").match(g) || [],
                          o = t.substr(0, t.indexOf(a[0])),
                          l = ")" === t.charAt(t.length - 1) ? ")" : "",
                          h = -1 !== t.indexOf(" ") ? " " : ",",
                          p = a.length,
                          u = p > 0 ? a[0].replace(d, "") : "";
                      return p
                          ? (r = e
                                ? function (t) {
                                      var e, c, _, f;
                                      if ("number" == typeof t) t += u;
                                      else if (s && D.test(t)) {
                                          for (f = t.replace(D, "|").split("|"), _ = 0; f.length > _; _++) f[_] = r(f[_]);
                                          return f.join(",");
                                      }
                                      if (((e = (t.match(lt) || [n])[0]), (_ = (c = t.split(e).join("").match(g) || []).length), p > _--)) for (; p > ++_; ) c[_] = i ? c[0 | ((_ - 1) / 2)] : a[_];
                                      return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
                                  }
                                : function (t) {
                                      var e, n, c;
                                      if ("number" == typeof t) t += u;
                                      else if (s && D.test(t)) {
                                          for (n = t.replace(D, "|").split("|"), c = 0; n.length > c; c++) n[c] = r(n[c]);
                                          return n.join(",");
                                      }
                                      if (((c = (e = t.match(g) || []).length), p > c--)) for (; p > ++c; ) e[c] = i ? e[0 | ((c - 1) / 2)] : a[c];
                                      return o + e.join(h) + l;
                                  })
                          : function (t) {
                                return t;
                            };
                  },
                  pt = function (t) {
                      return (
                          (t = t.split(",")),
                          function (e, i, s, r, n, a, o) {
                              var l,
                                  h = (i + "").split(" ");
                              for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                              return r.parse(e, o, n, a);
                          }
                      );
                  },
                  ut =
                      ((N._setPluginRatio = function (t) {
                          this.plugin.setRatio(t);
                          for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT; o; ) (e = a[o.v]), o.r ? (e = e > 0 ? 0 | (e + 0.5) : 0 | (e - 0.5)) : 1e-6 > e && e > -1e-6 && (e = 0), (o.t[o.p] = e), (o = o._next);
                          if ((n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t))
                              for (o = n.firstMPT; o; ) {
                                  if ((i = o.t).type) {
                                      if (1 === i.type) {
                                          for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                          i.e = r;
                                      }
                                  } else i.e = i.s + i.xs0;
                                  o = o._next;
                              }
                      }),
                      function (t, e, i, s, r) {
                          (this.t = t), (this.p = e), (this.v = i), (this.r = r), s && ((s._prev = this), (this._next = s));
                      }),
                  ct =
                      ((N._parseToProxy = function (t, e, i, s, r, n) {
                          var a,
                              o,
                              l,
                              h,
                              p,
                              u = s,
                              c = {},
                              _ = {},
                              f = i._transform,
                              d = U;
                          for (i._transform = null, U = e, s = p = i.parse(t, e, s, r), U = d, n && ((i._transform = f), u && ((u._prev = null), u._prev && (u._prev._next = null))); s && s !== u; ) {
                              if (1 >= s.type && ((_[(o = s.p)] = s.s + s.c), (c[o] = s.s), n || ((h = new ut(s, "s", o, h, s.r)), (s.c = 0)), 1 === s.type))
                                  for (a = s.l; --a > 0; ) (l = "xn" + a), (_[(o = s.p + "_" + l)] = s.data[l]), (c[o] = s[l]), n || (h = new ut(s, l, o, h, s.rxp[l]));
                              s = s._next;
                          }
                          return { proxy: c, end: _, firstMPT: h, pt: p };
                      }),
                      (N.CSSPropTween = function (t, e, s, r, a, o, l, h, p, u, c) {
                          (this.t = t),
                              (this.p = e),
                              (this.s = s),
                              (this.c = r),
                              (this.n = l || e),
                              t instanceof ct || n.push(this.n),
                              (this.r = h),
                              (this.type = o || 0),
                              p && ((this.pr = p), (i = !0)),
                              (this.b = void 0 === u ? s : u),
                              (this.e = void 0 === c ? s + r : c),
                              a && ((this._next = a), (a._prev = this));
                      })),
                  _t = (a.parseComplex = function (t, e, i, s, r, n, a, o, l, p) {
                      (i = i || n || ""), (a = new ct(t, e, 0, 0, a, p ? 2 : 1, null, !1, o, i, s)), (s += "");
                      var u,
                          c,
                          _,
                          f,
                          g,
                          v,
                          y,
                          x,
                          b,
                          T,
                          P,
                          k,
                          S = i.split(", ").join(",").split(" "),
                          C = s.split(", ").join(",").split(" "),
                          I = S.length,
                          L = !1 !== h;
                      for (
                          (-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && ((S = S.join(" ").replace(D, ", ").split(" ")), (C = C.join(" ").replace(D, ", ").split(" ")), (I = S.length)),
                              I !== C.length && (I = (S = (n || "").split(" ")).length),
                              a.plugin = l,
                              a.setRatio = p,
                              u = 0;
                          I > u;
                          u++
                      )
                          if (((f = S[u]), (g = C[u]), (x = parseFloat(f)) || 0 === x)) a.appendXtra("", x, it(g, x), g.replace(m, ""), L && -1 !== g.indexOf("px"), !0);
                          else if (r && ("#" === f.charAt(0) || nt[f] || w.test(f)))
                              (k = "," === g.charAt(g.length - 1) ? ")," : ")"),
                                  (f = ot(f)),
                                  (g = ot(g)),
                                  (b = f.length + g.length > 6) && !F && 0 === g[3]
                                      ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"), (a.e = a.e.split(C[u]).join("transparent")))
                                      : (F || (b = !1),
                                        a
                                            .appendXtra(b ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0)
                                            .appendXtra("", f[1], g[1] - f[1], ",", !0)
                                            .appendXtra("", f[2], g[2] - f[2], b ? "," : k, !0),
                                        b && ((f = 4 > f.length ? 1 : f[3]), a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, k, !1)));
                          else if ((v = f.match(d))) {
                              if (!(y = g.match(m)) || y.length !== v.length) return a;
                              for (_ = 0, c = 0; v.length > c; c++) (P = v[c]), (T = f.indexOf(P, _)), a.appendXtra(f.substr(_, T - _), Number(P), it(y[c], P), "", L && "px" === f.substr(T + P.length, 2), 0 === c), (_ = T + P.length);
                              a["xs" + a.l] += f.substr(_);
                          } else a["xs" + a.l] += a.l ? " " + f : f;
                      if (-1 !== s.indexOf("=") && a.data) {
                          for (k = a.xs0 + a.data.s, u = 1; a.l > u; u++) k += a["xs" + u] + a.data["xn" + u];
                          a.e = k + a["xs" + u];
                      }
                      return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
                  }),
                  ft = 9;
              for ((l = ct.prototype).l = l.pr = 0; --ft > 0; ) (l["xn" + ft] = 0), (l["xs" + ft] = "");
              (l.xs0 = ""),
                  (l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null),
                  (l.appendXtra = function (t, e, i, s, r, n) {
                      var a = this,
                          o = a.l;
                      return (
                          (a["xs" + o] += n && o ? " " + t : t || ""),
                          i || 0 === o || a.plugin
                              ? (a.l++,
                                (a.type = a.setRatio ? 2 : 1),
                                (a["xs" + a.l] = s || ""),
                                o > 0
                                    ? ((a.data["xn" + o] = e + i), (a.rxp["xn" + o] = r), (a["xn" + o] = e), a.plugin || ((a.xfirst = new ct(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr)), (a.xfirst.xs0 = 0)), a)
                                    : ((a.data = { s: e + i }), (a.rxp = {}), (a.s = e), (a.c = i), (a.r = r), a))
                              : ((a["xs" + o] += e + (s || "")), a)
                      );
                  });
              var dt = function (t, e) {
                      (e = e || {}),
                          (this.p = (e.prefix && $(t)) || t),
                          (o[t] = o[this.p] = this),
                          (this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi)),
                          e.parser && (this.parse = e.parser),
                          (this.clrs = e.color),
                          (this.multi = e.multi),
                          (this.keyword = e.keyword),
                          (this.dflt = e.defaultValue),
                          (this.pr = e.priority || 0);
                  },
                  mt = (N._registerComplexSpecialProp = function (t, e, i) {
                      "object" != typeof e && (e = { parser: i });
                      var s,
                          r = t.split(","),
                          n = e.defaultValue;
                      for (i = i || [n], s = 0; r.length > s; s++) (e.prefix = 0 === s && e.prefix), (e.defaultValue = i[s] || n), new dt(r[s], e);
                  }),
                  gt = function (t) {
                      if (!o[t]) {
                          var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                          mt(t, {
                              parser: function (t, i, s, r, n, a, l) {
                                  var h = (window.GreenSockGlobals || window).com.greensock.plugins[e];
                                  return h ? (h._cssRegister(), o[s].parse(t, i, s, r, n, a, l)) : (V("Error: " + e + " js file not loaded."), n);
                              },
                          });
                      }
                  };
              ((l = dt.prototype).parseComplex = function (t, e, i, s, r, n) {
                  var a,
                      o,
                      l,
                      h,
                      p,
                      u = this.keyword;
                  if ((this.multi && (D.test(i) || D.test(e) ? ((o = e.replace(D, "|").split("|")), (l = i.replace(D, "|").split("|"))) : u && ((o = [e]), (l = [i]))), l)) {
                      for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++)
                          (e = o[a] = o[a] || this.dflt), (i = l[a] = l[a] || this.dflt), u && e.indexOf(u) !== (p = i.indexOf(u)) && ((i = -1 === p ? l : o)[a] += " " + u);
                      (e = o.join(", ")), (i = l.join(", "));
                  }
                  return _t(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
              }),
                  (l.parse = function (t, e, i, s, n, a) {
                      return this.parseComplex(t.style, this.format(H(t, this.p, r, !1, this.dflt)), this.format(e), n, a);
                  }),
                  (a.registerSpecialProp = function (t, e, i) {
                      mt(t, {
                          parser: function (t, s, r, n, a, o) {
                              var l = new ct(t, r, 0, 0, a, 2, r, !1, i);
                              return (l.plugin = o), (l.setRatio = e(t, s, n._tween, r)), l;
                          },
                          priority: i,
                      });
                  });
              var vt = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                  yt = $("transform"),
                  xt = X + "transform",
                  bt = $("transformOrigin"),
                  Tt = null !== $("perspective"),
                  wt = function (t, e, i, s) {
                      if (t._gsTransform && i && !s) return t._gsTransform;
                      var r,
                          n,
                          o,
                          l,
                          h,
                          p,
                          u,
                          c,
                          _,
                          f,
                          d,
                          m,
                          g,
                          v = (i && t._gsTransform) || { skewY: 0 },
                          y = 0 > v.scaleX,
                          x = 2e-5,
                          b = 1e5,
                          T = 179.99,
                          w = T * O,
                          P = (Tt && (parseFloat(H(t, bt, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin)) || 0;
                      for (
                          yt
                              ? (r = H(t, xt, e, !0))
                              : t.currentStyle && (r = (r = t.currentStyle.filter.match(L)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""),
                              o = (n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || []).length;
                          --o > -1;

                      )
                          (l = Number(n[o])), (n[o] = (h = l - (l |= 0)) ? (0 | (h * b + (0 > h ? -0.5 : 0.5))) / b + l : l);
                      if (16 === n.length) {
                          var k = n[8],
                              S = n[9],
                              C = n[10],
                              I = n[12],
                              R = n[13],
                              D = n[14];
                          if ((v.zOrigin && ((I = k * (D = -v.zOrigin) - n[12]), (R = S * D - n[13]), (D = C * D + v.zOrigin - n[14])), !i || s || null == v.rotationX)) {
                              var U,
                                  W,
                                  M,
                                  j,
                                  N,
                                  E,
                                  F,
                                  z = n[0],
                                  V = n[1],
                                  X = n[2],
                                  B = n[3],
                                  $ = n[4],
                                  Y = n[5],
                                  q = n[6],
                                  G = n[7],
                                  Z = n[11],
                                  K = Math.atan2(q, C),
                                  J = -w > K || K > w;
                              (v.rotationX = K * A),
                                  K &&
                                      ((U = $ * (j = Math.cos(-K)) + k * (N = Math.sin(-K))),
                                      (W = Y * j + S * N),
                                      (M = q * j + C * N),
                                      (k = $ * -N + k * j),
                                      (S = Y * -N + S * j),
                                      (C = q * -N + C * j),
                                      (Z = G * -N + Z * j),
                                      ($ = U),
                                      (Y = W),
                                      (q = M)),
                                  (K = Math.atan2(k, z)),
                                  (v.rotationY = K * A),
                                  K &&
                                      ((E = -w > K || K > w),
                                      (W = V * (j = Math.cos(-K)) - S * (N = Math.sin(-K))),
                                      (M = X * j - C * N),
                                      (S = V * N + S * j),
                                      (C = X * N + C * j),
                                      (Z = B * N + Z * j),
                                      (z = U = z * j - k * N),
                                      (V = W),
                                      (X = M)),
                                  (K = Math.atan2(V, Y)),
                                  (v.rotation = K * A),
                                  K && ((F = -w > K || K > w), (z = z * (j = Math.cos(-K)) + $ * (N = Math.sin(-K))), (W = V * j + Y * N), (Y = V * -N + Y * j), (q = X * -N + q * j), (V = W)),
                                  F && J ? (v.rotation = v.rotationX = 0) : F && E ? (v.rotation = v.rotationY = 0) : E && J && (v.rotationY = v.rotationX = 0),
                                  (v.scaleX = (0 | (Math.sqrt(z * z + V * V) * b + 0.5)) / b),
                                  (v.scaleY = (0 | (Math.sqrt(Y * Y + S * S) * b + 0.5)) / b),
                                  (v.scaleZ = (0 | (Math.sqrt(q * q + C * C) * b + 0.5)) / b),
                                  (v.skewX = 0),
                                  (v.perspective = Z ? 1 / (0 > Z ? -Z : Z) : 0),
                                  (v.x = I),
                                  (v.y = R),
                                  (v.z = D);
                          }
                      } else if (!((Tt && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY)) || (void 0 !== v.x && "none" === H(t, "display", e)))) {
                          var Q = n.length >= 6,
                              tt = Q ? n[0] : 1,
                              et = n[1] || 0,
                              it = n[2] || 0,
                              st = Q ? n[3] : 1;
                          (v.x = n[4] || 0),
                              (v.y = n[5] || 0),
                              (p = Math.sqrt(tt * tt + et * et)),
                              (u = Math.sqrt(st * st + it * it)),
                              (c = tt || et ? Math.atan2(et, tt) * A : v.rotation || 0),
                              (_ = it || st ? Math.atan2(it, st) * A + c : v.skewX || 0),
                              (f = p - Math.abs(v.scaleX || 0)),
                              (d = u - Math.abs(v.scaleY || 0)),
                              Math.abs(_) > 90 && 270 > Math.abs(_) && (y ? ((p *= -1), (_ += 0 >= c ? 180 : -180), (c += 0 >= c ? 180 : -180)) : ((u *= -1), (_ += 0 >= _ ? 180 : -180))),
                              (m = (c - v.rotation) % 180),
                              (g = (_ - v.skewX) % 180),
                              (void 0 === v.skewX || f > x || -x > f || d > x || -x > d || (m > -T && T > m && !1 | (m * b)) || (g > -T && T > g && !1 | (g * b))) && ((v.scaleX = p), (v.scaleY = u), (v.rotation = c), (v.skewX = _)),
                              Tt && ((v.rotationX = v.rotationY = v.z = 0), (v.perspective = parseFloat(a.defaultTransformPerspective) || 0), (v.scaleZ = 1));
                      }
                      for (o in ((v.zOrigin = P), v)) x > v[o] && v[o] > -x && (v[o] = 0);
                      return i && (t._gsTransform = v), v;
                  },
                  Pt = function (t) {
                      var e,
                          i,
                          s = this.data,
                          r = -s.rotation * O,
                          n = r + s.skewX * O,
                          a = 1e5,
                          o = (0 | (Math.cos(r) * s.scaleX * a)) / a,
                          l = (0 | (Math.sin(r) * s.scaleX * a)) / a,
                          h = (0 | (Math.sin(n) * -s.scaleY * a)) / a,
                          p = (0 | (Math.cos(n) * s.scaleY * a)) / a,
                          u = this.t.style,
                          c = this.t.currentStyle;
                      if (c) {
                          (i = l), (l = -h), (h = -i), (e = c.filter), (u.filter = "");
                          var _,
                              d,
                              m = this.t.offsetWidth,
                              g = this.t.offsetHeight,
                              v = "absolute" !== c.position,
                              b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + p,
                              T = s.x,
                              w = s.y;
                          if (
                              (null != s.ox && ((T += (_ = (s.oxp ? 0.01 * m * s.ox : s.ox) - m / 2) - (_ * o + (d = (s.oyp ? 0.01 * g * s.oy : s.oy) - g / 2) * l)), (w += d - (_ * h + d * p))),
                              v ? (b += ", Dx=" + ((_ = m / 2) - (_ * o + (d = g / 2) * l) + T) + ", Dy=" + (d - (_ * h + d * p) + w) + ")") : (b += ", sizingMethod='auto expand')"),
                              (u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(R, b) : b + " " + e),
                              (0 === t || 1 === t) &&
                                  1 === o &&
                                  0 === l &&
                                  0 === h &&
                                  1 === p &&
                                  ((v && -1 === b.indexOf("Dx=0, Dy=0")) || (x.test(e) && 100 !== parseFloat(RegExp.$1)) || (-1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter"))),
                              !v)
                          ) {
                              var P,
                                  k,
                                  S,
                                  C = 8 > f ? 1 : -1;
                              for (
                                  _ = s.ieOffsetX || 0,
                                      d = s.ieOffsetY || 0,
                                      s.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + T),
                                      s.ieOffsetY = Math.round((g - ((0 > p ? -p : p) * g + (0 > h ? -h : h) * m)) / 2 + w),
                                      ft = 0;
                                  4 > ft;
                                  ft++
                              )
                                  (S =
                                      (i = -1 !== (P = c[(k = Q[ft])]).indexOf("px") ? parseFloat(P) : q(this.t, k, parseFloat(P), P.replace(y, "")) || 0) !== s[k]
                                          ? 2 > ft
                                              ? -s.ieOffsetX
                                              : -s.ieOffsetY
                                          : 2 > ft
                                          ? _ - s.ieOffsetX
                                          : d - s.ieOffsetY),
                                      (u[k] = (s[k] = Math.round(i - S * (0 === ft || 2 === ft ? 1 : C))) + "px");
                          }
                      }
                  },
                  kt = function () {
                      var t,
                          e,
                          i,
                          s,
                          r,
                          n,
                          a,
                          o,
                          l,
                          h,
                          p,
                          u,
                          _,
                          f,
                          d,
                          m,
                          g,
                          v,
                          y,
                          x,
                          b,
                          T,
                          w,
                          P = this.data,
                          k = this.t.style,
                          S = P.rotation * O,
                          C = P.scaleX,
                          I = P.scaleY,
                          L = P.scaleZ,
                          R = P.perspective;
                      if (c) {
                          var D = 1e-4;
                          D > C && C > -D && (C = L = 2e-5), D > I && I > -D && (I = L = 2e-5), !R || P.z || P.rotationX || P.rotationY || (R = 0);
                      }
                      if (S || P.skewX) (t = v = Math.cos(S)), (r = y = Math.sin(S)), P.skewX && ((S -= P.skewX * O), (v = Math.cos(S)), (y = Math.sin(S))), (e = -y), (n = v);
                      else {
                          if (!(P.rotationY || P.rotationX || 1 !== L || R)) return void (k[yt] = "translate3d(" + P.x + "px," + P.y + "px," + P.z + "px)" + (1 !== C || 1 !== I ? " scale(" + C + "," + I + ")" : ""));
                          (t = n = 1), (e = r = 0);
                      }
                      (p = 1),
                          (i = s = a = o = l = h = u = _ = f = 0),
                          (d = R ? -1 / R : 0),
                          (m = P.zOrigin),
                          (g = 1e5),
                          (S = P.rotationY * O) && ((v = Math.cos(S)), (l = p * -(y = Math.sin(S))), (_ = d * -y), (i = t * y), (a = r * y), (p *= v), (d *= v), (t *= v), (r *= v)),
                          (S = P.rotationX * O) &&
                              ((x = e * (v = Math.cos(S)) + i * (y = Math.sin(S))),
                              (b = n * v + a * y),
                              (T = h * v + p * y),
                              (w = f * v + d * y),
                              (i = e * -y + i * v),
                              (a = n * -y + a * v),
                              (p = h * -y + p * v),
                              (d = f * -y + d * v),
                              (e = x),
                              (n = b),
                              (h = T),
                              (f = w)),
                          1 !== L && ((i *= L), (a *= L), (p *= L), (d *= L)),
                          1 !== I && ((e *= I), (n *= I), (h *= I), (f *= I)),
                          1 !== C && ((t *= C), (r *= C), (l *= C), (_ *= C)),
                          m && ((s = i * (u -= m)), (o = a * u), (u = p * u + m)),
                          (s = (x = (s += P.x) - (s |= 0)) ? (0 | (x * g + (0 > x ? -0.5 : 0.5))) / g + s : s),
                          (o = (x = (o += P.y) - (o |= 0)) ? (0 | (x * g + (0 > x ? -0.5 : 0.5))) / g + o : o),
                          (u = (x = (u += P.z) - (u |= 0)) ? (0 | (x * g + (0 > x ? -0.5 : 0.5))) / g + u : u),
                          (k[yt] =
                              "matrix3d(" +
                              [
                                  (0 | (t * g)) / g,
                                  (0 | (r * g)) / g,
                                  (0 | (l * g)) / g,
                                  (0 | (_ * g)) / g,
                                  (0 | (e * g)) / g,
                                  (0 | (n * g)) / g,
                                  (0 | (h * g)) / g,
                                  (0 | (f * g)) / g,
                                  (0 | (i * g)) / g,
                                  (0 | (a * g)) / g,
                                  (0 | (p * g)) / g,
                                  (0 | (d * g)) / g,
                                  s,
                                  o,
                                  u,
                                  R ? 1 + -u / R : 1,
                              ].join(",") +
                              ")");
                  },
                  St = function () {
                      var t,
                          e,
                          i,
                          s,
                          r,
                          n,
                          a,
                          o,
                          l,
                          h = this.data,
                          p = this.t,
                          u = p.style;
                      c &&
                          ((t = u.top ? "top" : u.bottom ? "bottom" : parseFloat(H(p, "top", null, !1)) ? "bottom" : "top"),
                          (e = H(p, t, null, !1)),
                          (i = parseFloat(e) || 0),
                          (s = e.substr((i + "").length) || "px"),
                          (h._ffFix = !h._ffFix),
                          (u[t] = (h._ffFix ? i + 0.05 : i - 0.05) + s)),
                          h.rotation || h.skewX
                              ? ((n = (r = h.rotation * O) - h.skewX * O),
                                (a = 1e5),
                                (o = h.scaleX * a),
                                (l = h.scaleY * a),
                                (u[yt] = "matrix(" + (0 | (Math.cos(r) * o)) / a + "," + (0 | (Math.sin(r) * o)) / a + "," + (0 | (Math.sin(n) * -l)) / a + "," + (0 | (Math.cos(n) * l)) / a + "," + h.x + "," + h.y + ")"))
                              : (u[yt] = "matrix(" + h.scaleX + ",0,0," + h.scaleY + "," + h.x + "," + h.y + ")");
                  };
              mt(
                  "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D",
                  {
                      parser: function (t, e, i, s, n, a, o) {
                          if (s._transform) return n;
                          var l,
                              h,
                              p,
                              u,
                              c,
                              _,
                              f,
                              d = (s._transform = wt(t, r, !0, o.parseTransform)),
                              m = t.style,
                              g = vt.length,
                              v = o,
                              y = {};
                          if ("string" == typeof v.transform && yt) (p = m.cssText), (m[yt] = v.transform), (m.display = "block"), (l = wt(t, null, !1)), (m.cssText = p);
                          else if ("object" == typeof v) {
                              if (
                                  ((l = {
                                      scaleX: st(null != v.scaleX ? v.scaleX : v.scale, d.scaleX),
                                      scaleY: st(null != v.scaleY ? v.scaleY : v.scale, d.scaleY),
                                      scaleZ: st(null != v.scaleZ ? v.scaleZ : v.scale, d.scaleZ),
                                      x: st(v.x, d.x),
                                      y: st(v.y, d.y),
                                      z: st(v.z, d.z),
                                      perspective: st(v.transformPerspective, d.perspective),
                                  }),
                                  null != (f = v.directionalRotation))
                              )
                                  if ("object" == typeof f) for (p in f) v[p] = f[p];
                                  else v.rotation = f;
                              (l.rotation = rt("rotation" in v ? v.rotation : "shortRotation" in v ? v.shortRotation + "_short" : "rotationZ" in v ? v.rotationZ : d.rotation, d.rotation, "rotation", y)),
                                  Tt &&
                                      ((l.rotationX = rt("rotationX" in v ? v.rotationX : "shortRotationX" in v ? v.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", y)),
                                      (l.rotationY = rt("rotationY" in v ? v.rotationY : "shortRotationY" in v ? v.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", y))),
                                  (l.skewX = null == v.skewX ? d.skewX : rt(v.skewX, d.skewX)),
                                  (l.skewY = null == v.skewY ? d.skewY : rt(v.skewY, d.skewY)),
                                  (h = l.skewY - d.skewY) && ((l.skewX += h), (l.rotation += h));
                          }
                          for (
                              null != v.force3D && ((d.force3D = v.force3D), (_ = !0)), (c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective) || null == v.scale || (l.scaleZ = 1);
                              --g > -1;

                          )
                              ((u = l[(i = vt[g])] - d[i]) > 1e-6 || -1e-6 > u || null != U[i]) && ((_ = !0), (n = new ct(d, i, d[i], u, n)), i in y && (n.e = y[i]), (n.xs0 = 0), (n.plugin = a), s._overwriteProps.push(n.n));
                          return (
                              ((u = v.transformOrigin) || (Tt && c && d.zOrigin)) &&
                                  (yt
                                      ? ((_ = !0),
                                        (i = bt),
                                        (u = (u || H(t, i, r, !1, "50% 50%")) + ""),
                                        ((n = new ct(m, i, 0, 0, n, -1, "transformOrigin")).b = m[i]),
                                        (n.plugin = a),
                                        Tt
                                            ? ((p = d.zOrigin),
                                              (u = u.split(" ")),
                                              (d.zOrigin = (u.length > 2 && (0 === p || "0px" !== u[2]) ? parseFloat(u[2]) : p) || 0),
                                              (n.xs0 = n.e = m[i] = u[0] + " " + (u[1] || "50%") + " 0px"),
                                              ((n = new ct(d, "zOrigin", 0, 0, n, -1, n.n)).b = p),
                                              (n.xs0 = n.e = d.zOrigin))
                                            : (n.xs0 = n.e = m[i] = u))
                                      : et(u + "", d)),
                              _ && (s._transformType = c || 3 === this._transformType ? 3 : 2),
                              n
                          );
                      },
                      prefix: !0,
                  }
              ),
                  mt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                  mt("borderRadius", {
                      defaultValue: "0px",
                      parser: function (t, e, i, n, a) {
                          e = this.format(e);
                          var o,
                              l,
                              h,
                              p,
                              u,
                              c,
                              _,
                              f,
                              d,
                              m,
                              g,
                              v,
                              y,
                              x,
                              b,
                              T,
                              w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                              P = t.style;
                          for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; w.length > l; l++)
                              this.p.indexOf("border") && (w[l] = $(w[l])),
                                  -1 !== (u = p = H(t, w[l], r, !1, "0px")).indexOf(" ") && ((u = (p = u.split(" "))[0]), (p = p[1])),
                                  (c = h = o[l]),
                                  (_ = parseFloat(u)),
                                  (v = u.substr((_ + "").length)),
                                  (y = "=" === c.charAt(1))
                                      ? ((f = parseInt(c.charAt(0) + "1", 10)), (c = c.substr(2)), (f *= parseFloat(c)), (g = c.substr((f + "").length - (0 > f ? 1 : 0)) || ""))
                                      : ((f = parseFloat(c)), (g = c.substr((f + "").length))),
                                  "" === g && (g = s[i] || v),
                                  g !== v &&
                                      ((x = q(t, "borderLeft", _, v)),
                                      (b = q(t, "borderTop", _, v)),
                                      "%" === g ? ((u = (x / d) * 100 + "%"), (p = (b / m) * 100 + "%")) : "em" === g ? ((u = x / (T = q(t, "borderLeft", 1, "em")) + "em"), (p = b / T + "em")) : ((u = x + "px"), (p = b + "px")),
                                      y && ((c = parseFloat(u) + f + g), (h = parseFloat(p) + f + g))),
                                  (a = _t(P, w[l], u + " " + p, c + " " + h, !1, "0px", a));
                          return a;
                      },
                      prefix: !0,
                      formatter: ht("0px 0px 0px 0px", !1, !0),
                  }),
                  mt("backgroundPosition", {
                      defaultValue: "0 0",
                      parser: function (t, e, i, s, n, a) {
                          var o,
                              l,
                              h,
                              p,
                              u,
                              c,
                              _ = "background-position",
                              d = r || Y(t, null),
                              m = this.format((d ? (f ? d.getPropertyValue(_ + "-x") + " " + d.getPropertyValue(_ + "-y") : d.getPropertyValue(_)) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                              g = this.format(e);
                          if ((-1 !== m.indexOf("%")) != (-1 !== g.indexOf("%")) && (c = H(t, "backgroundImage").replace(S, "")) && "none" !== c) {
                              for (o = m.split(" "), l = g.split(" "), j.setAttribute("src", c), h = 2; --h > -1; )
                                  (p = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) &&
                                      ((u = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height), (o[h] = p ? (parseFloat(m) / 100) * u + "px" : (parseFloat(m) / u) * 100 + "%"));
                              m = o.join(" ");
                          }
                          return this.parseComplex(t.style, m, g, n, a);
                      },
                      formatter: et,
                  }),
                  mt("backgroundSize", { defaultValue: "0 0", formatter: et }),
                  mt("perspective", { defaultValue: "0px", prefix: !0 }),
                  mt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                  mt("transformStyle", { prefix: !0 }),
                  mt("backfaceVisibility", { prefix: !0 }),
                  mt("userSelect", { prefix: !0 }),
                  mt("margin", { parser: pt("marginTop,marginRight,marginBottom,marginLeft") }),
                  mt("padding", { parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                  mt("clip", {
                      defaultValue: "rect(0px,0px,0px,0px)",
                      parser: function (t, e, i, s, n, a) {
                          var o, l, h;
                          return (
                              9 > f
                                  ? ((l = t.currentStyle), (h = 8 > f ? " " : ","), (o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")"), (e = this.format(e).split(",").join(h)))
                                  : ((o = this.format(H(t, this.p, r, !1, this.dflt))), (e = this.format(e))),
                              this.parseComplex(t.style, o, e, n, a)
                          );
                      },
                  }),
                  mt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                  mt("autoRound,strictUnits", {
                      parser: function (t, e, i, s, r) {
                          return r;
                      },
                  }),
                  mt("border", {
                      defaultValue: "0px solid #000",
                      parser: function (t, e, i, s, n, a) {
                          return this.parseComplex(t.style, this.format(H(t, "borderTopWidth", r, !1, "0px") + " " + H(t, "borderTopStyle", r, !1, "solid") + " " + H(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a);
                      },
                      color: !0,
                      formatter: function (t) {
                          var e = t.split(" ");
                          return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0];
                      },
                  }),
                  mt("float,cssFloat,styleFloat", {
                      parser: function (t, e, i, s, r) {
                          var n = t.style,
                              a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                          return new ct(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
                      },
                  });
              var Ct = function (t) {
                  var e,
                      i = this.t,
                      s = i.filter || H(this.data, "filter"),
                      r = 0 | (this.s + this.c * t);
                  100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), (e = !H(this.data, "filter"))) : ((i.filter = s.replace(T, "")), (e = !0))),
                      e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("opacity") ? (0 === r && this.xn1) || (i.filter = s + " alpha(opacity=" + r + ")") : (i.filter = s.replace(x, "opacity=" + r)));
              };
              mt("opacity,alpha,autoAlpha", {
                  defaultValue: "1",
                  parser: function (t, e, i, s, n, a) {
                      var o = parseFloat(H(t, "opacity", r, !1, "1")),
                          l = t.style,
                          h = "autoAlpha" === i;
                      return (
                          "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                          h && 1 === o && "hidden" === H(t, "visibility", r) && 0 !== e && (o = 0),
                          F
                              ? (n = new ct(l, "opacity", o, e - o, n))
                              : (((n = new ct(l, "opacity", 100 * o, 100 * (e - o), n)).xn1 = h ? 1 : 0),
                                (l.zoom = 1),
                                (n.type = 2),
                                (n.b = "alpha(opacity=" + n.s + ")"),
                                (n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
                                (n.data = t),
                                (n.plugin = a),
                                (n.setRatio = Ct)),
                          h && (((n = new ct(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit"), s._overwriteProps.push(n.n), s._overwriteProps.push(i)),
                          n
                      );
                  },
              });
              var It = function (t, e) {
                      e && (t.removeProperty ? t.removeProperty(e.replace(P, "-$1").toLowerCase()) : t.removeAttribute(e));
                  },
                  Lt = function (t) {
                      if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
                          this.t.className = 0 === t ? this.b : this.e;
                          for (var e = this.data, i = this.t.style; e; ) e.v ? (i[e.p] = e.v) : It(i, e.p), (e = e._next);
                          1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                      } else this.t.className !== this.e && (this.t.className = this.e);
                  };
              mt("className", {
                  parser: function (t, e, s, n, a, o, l) {
                      var h,
                          p,
                          u,
                          c,
                          _,
                          f = t.className,
                          d = t.style.cssText;
                      if ((((a = n._classNamePT = new ct(t, s, 0, 0, a, 2)).setRatio = Lt), (a.pr = -11), (i = !0), (a.b = f), (p = Z(t, r)), (u = t._gsClassPT))) {
                          for (c = {}, _ = u.data; _; ) (c[_.p] = 1), (_ = _._next);
                          u.setRatio(1);
                      }
                      return (
                          (t._gsClassPT = a),
                          (a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
                          n._tween._duration && ((t.className = a.e), (h = K(t, p, Z(t), l, c)), (t.className = f), (a.data = h.firstMPT), (t.style.cssText = d), (a = a.xfirst = n.parse(t, h.difs, a, o))),
                          a
                      );
                  },
              });
              var Rt = function (t) {
                  if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                      var e,
                          i,
                          s,
                          r,
                          n = this.t.style,
                          a = o.transform.parse;
                      if ("all" === this.e) (n.cssText = ""), (r = !0);
                      else for (s = (e = this.e.split(",")).length; --s > -1; ) (i = e[s]), o[i] && (o[i].parse === a ? (r = !0) : (i = "transformOrigin" === i ? bt : o[i].p)), It(n, i);
                      r && (It(n, yt), this.t._gsTransform && delete this.t._gsTransform);
                  }
              };
              for (
                  mt("clearProps", {
                      parser: function (t, e, s, r, n) {
                          return ((n = new ct(t, s, 0, 0, n, 2)).setRatio = Rt), (n.e = e), (n.pr = -10), (n.data = r._tween), (i = !0), n;
                      },
                  }),
                      l = "bezier,throwProps,physicsProps,physics2D".split(","),
                      ft = l.length;
                  ft--;

              )
                  gt(l[ft]);
              ((l = a.prototype)._firstPT = null),
                  (l._onInitTween = function (t, e, o) {
                      if (!t.nodeType) return !1;
                      (this._target = t), (this._tween = o), (this._vars = e), (h = e.autoRound), (i = !1), (s = e.suffixMap || a.suffixMap), (r = Y(t, "")), (n = this._overwriteProps);
                      var l,
                          c,
                          f,
                          d,
                          m,
                          g,
                          v,
                          y,
                          x,
                          T = t.style;
                      if (
                          (p && "" === T.zIndex && ("auto" === (l = H(t, "zIndex", r)) || "" === l) && (T.zIndex = 0),
                          "string" == typeof e && ((d = T.cssText), (l = Z(t, r)), (T.cssText = d + ";" + e), (l = K(t, l, Z(t)).difs), !F && b.test(e) && (l.opacity = parseFloat(RegExp.$1)), (e = l), (T.cssText = d)),
                          (this._firstPT = c = this.parse(t, e, null)),
                          this._transformType)
                      ) {
                          for (
                              x = 3 === this._transformType,
                                  yt
                                      ? u &&
                                        ((p = !0),
                                        "" === T.zIndex && ("auto" === (v = H(t, "zIndex", r)) || "" === v) && (T.zIndex = 0),
                                        _ && (T.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden")))
                                      : (T.zoom = 1),
                                  f = c;
                              f && f._next;

                          )
                              f = f._next;
                          (y = new ct(t, "transform", 0, 0, null, 2)), this._linkCSSP(y, null, f), (y.setRatio = x && Tt ? kt : yt ? St : Pt), (y.data = this._transform || wt(t, r, !0)), n.pop();
                      }
                      if (i) {
                          for (; c; ) {
                              for (g = c._next, f = d; f && f.pr > c.pr; ) f = f._next;
                              (c._prev = f ? f._prev : m) ? (c._prev._next = c) : (d = c), (c._next = f) ? (f._prev = c) : (m = c), (c = g);
                          }
                          this._firstPT = d;
                      }
                      return !0;
                  }),
                  (l.parse = function (t, e, i, n) {
                      var a,
                          l,
                          p,
                          u,
                          c,
                          _,
                          f,
                          d,
                          m,
                          g,
                          v = t.style;
                      for (a in e)
                          (_ = e[a]),
                              (l = o[a])
                                  ? (i = l.parse(t, _, a, this, i, n, e))
                                  : ((c = H(t, a, r) + ""),
                                    (m = "string" == typeof _),
                                    "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || (m && w.test(_))
                                        ? (m || (_ = ((_ = ot(_)).length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), (i = _t(v, a, c, _, !0, "transparent", i, 0, n)))
                                        : !m || (-1 === _.indexOf(" ") && -1 === _.indexOf(","))
                                        ? ((f = (p = parseFloat(c)) || 0 === p ? c.substr((p + "").length) : ""),
                                          ("" === c || "auto" === c) &&
                                              ("width" === a || "height" === a ? ((p = tt(t, a, r)), (f = "px")) : "left" === a || "top" === a ? ((p = G(t, a, r)), (f = "px")) : ((p = "opacity" !== a ? 0 : 1), (f = ""))),
                                          (g = m && "=" === _.charAt(1))
                                              ? ((u = parseInt(_.charAt(0) + "1", 10)), (_ = _.substr(2)), (u *= parseFloat(_)), (d = _.replace(y, "")))
                                              : ((u = parseFloat(_)), (d = (m && _.substr((u + "").length)) || "")),
                                          "" === d && (d = s[a] || f),
                                          (_ = u || 0 === u ? (g ? u + p : u) + d : e[a]),
                                          f !== d &&
                                              "" !== d &&
                                              (u || 0 === u) &&
                                              (p || 0 === p) &&
                                              ((p = q(t, a, p, f)),
                                              "%" === d ? ((p /= q(t, a, 100, "%") / 100) > 100 && (p = 100), !0 !== e.strictUnits && (c = p + "%")) : "em" === d ? (p /= q(t, a, 1, "em")) : ((u = q(t, a, u, d)), (d = "px")),
                                              g && (u || 0 === u) && (_ = u + p + d)),
                                          g && (u += p),
                                          (!p && 0 !== p) || (!u && 0 !== u)
                                              ? void 0 !== v[a] && (_ || ("NaN" != _ + "" && null != _))
                                                  ? ((i = new ct(v, a, u || p || 0, 0, i, -1, a, !1, 0, c, _)).xs0 = "none" !== _ || ("display" !== a && -1 === a.indexOf("Style")) ? _ : c)
                                                  : V("invalid " + a + " tween value: " + e[a])
                                              : ((i = new ct(v, a, p, u - p, i, 0, a, !1 !== h && ("px" === d || "zIndex" === a), 0, c, _)).xs0 = d))
                                        : (i = _t(v, a, c, _, !0, null, i, 0, n))),
                              n && i && !i.plugin && (i.plugin = n);
                      return i;
                  }),
                  (l.setRatio = function (t) {
                      var e,
                          i,
                          s,
                          r = this._firstPT;
                      if (1 !== t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                          if (t || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                              for (; r; ) {
                                  if (((e = r.c * t + r.s), r.r ? (e = e > 0 ? 0 | (e + 0.5) : 0 | (e - 0.5)) : 1e-6 > e && e > -1e-6 && (e = 0), r.type))
                                      if (1 === r.type)
                                          if (2 === (s = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                          else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                          else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                          else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                          else {
                                              for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                              r.t[r.p] = i;
                                          }
                                      else -1 === r.type ? (r.t[r.p] = r.xs0) : r.setRatio && r.setRatio(t);
                                  else r.t[r.p] = e + r.xs0;
                                  r = r._next;
                              }
                          else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t), (r = r._next);
                      else for (; r; ) 2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t), (r = r._next);
                  }),
                  (l._enableTransforms = function (t) {
                      (this._transformType = t || 3 === this._transformType ? 3 : 2), (this._transform = this._transform || wt(this._target, r, !0));
                  }),
                  (l._linkCSSP = function (t, e, i, s) {
                      return (
                          t &&
                              (e && (e._prev = t),
                              t._next && (t._next._prev = t._prev),
                              t._prev ? (t._prev._next = t._next) : this._firstPT === t && ((this._firstPT = t._next), (s = !0)),
                              i ? (i._next = t) : s || null !== this._firstPT || (this._firstPT = t),
                              (t._next = e),
                              (t._prev = i)),
                          t
                      );
                  }),
                  (l._kill = function (e) {
                      var i,
                          s,
                          r,
                          n = e;
                      if (e.autoAlpha || e.alpha) {
                          for (s in ((n = {}), e)) n[s] = e[s];
                          (n.opacity = 1), n.autoAlpha && (n.visibility = 1);
                      }
                      return (
                          e.className &&
                              (i = this._classNamePT) &&
                              ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next),
                              i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                              (this._classNamePT = null)),
                          t.prototype._kill.call(this, n)
                      );
                  });
              var Dt = function (t, e, i) {
                  var s, r, n, a;
                  if (t.slice) for (r = t.length; --r > -1; ) Dt(t[r], e, i);
                  else for (r = (s = t.childNodes).length; --r > -1; ) (a = (n = s[r]).type), n.style && (e.push(Z(n)), i && i.push(n)), (1 !== a && 9 !== a && 11 !== a) || !n.childNodes.length || Dt(n, e, i);
              };
              return (
                  (a.cascadeTo = function (t, i, s) {
                      var r,
                          n,
                          a,
                          o = e.to(t, i, s),
                          l = [o],
                          h = [],
                          p = [],
                          u = [],
                          c = e._internals.reservedProps;
                      for (t = o._targets || o.target, Dt(t, h, u), o.render(i, !0), Dt(t, p), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1; )
                          if ((n = K(u[r], h[r], p[r])).firstMPT) {
                              for (a in ((n = n.difs), s)) c[a] && (n[a] = s[a]);
                              l.push(e.to(u[r], i, n));
                          }
                      return l;
                  }),
                  t.activate([a]),
                  a
              );
          },
          !0
      ),
      (function () {
          var t = window._gsDefine.plugin({
              propName: "roundProps",
              priority: -1,
              API: 2,
              init: function (t, e, i) {
                  return (this._tween = i), !0;
              },
          }).prototype;
          (t._onInitAllProps = function () {
              for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1; ) a[r[n]] = 1;
              for (n = r.length; --n > -1; )
                  for (t = r[n], e = s._firstPT; e; )
                      (i = e._next),
                          e.pg
                              ? e.t._roundProps(a, !0)
                              : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? (e._prev._next = i) : s._firstPT === e && (s._firstPT = i), (e._next = e._prev = null), (s._propLookup[t] = o)),
                          (e = i);
              return !1;
          }),
              (t._add = function (t, e, i, s) {
                  this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
              });
      })(),
      window._gsDefine.plugin({
          propName: "attr",
          API: 2,
          init: function (t, e) {
              var i;
              if ("function" != typeof t.setAttribute) return !1;
              for (i in ((this._target = t), (this._proxy = {}), e)) this._addTween(this._proxy, i, parseFloat(t.getAttribute(i)), e[i], i) && this._overwriteProps.push(i);
              return !0;
          },
          set: function (t) {
              this._super.setRatio.call(this, t);
              for (var e, i = this._overwriteProps, s = i.length; --s > -1; ) (e = i[s]), this._target.setAttribute(e, this._proxy[e] + "");
          },
      }),
      (window._gsDefine.plugin({
          propName: "directionalRotation",
          API: 2,
          init: function (t, e) {
              "object" != typeof e && (e = { rotation: e }), (this.finals = {});
              var i,
                  s,
                  r,
                  n,
                  a,
                  o = !0 === e.useRadians ? 2 * Math.PI : 360;
              for (i in e)
                  "useRadians" !== i &&
                      ((s = (a = (e[i] + "").split("_"))[0]),
                      (r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]())),
                      (n = (this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - r),
                      a.length &&
                          (-1 !== (s = a.join("_")).indexOf("short") && (n %= o) !== n % (o / 2) && (n = 0 > n ? n + o : n - o),
                          -1 !== s.indexOf("_cw") && 0 > n ? (n = ((n + 9999999999 * o) % o) - (0 | (n / o)) * o) : -1 !== s.indexOf("ccw") && n > 0 && (n = ((n - 9999999999 * o) % o) - (0 | (n / o)) * o)),
                      (n > 1e-6 || -1e-6 > n) && (this._addTween(t, i, r, r + n, i), this._overwriteProps.push(i)));
              return !0;
          },
          set: function (t) {
              var e;
              if (1 !== t) this._super.setRatio.call(this, t);
              else for (e = this._firstPT; e; ) e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]), (e = e._next);
          },
      })._autoCSS = !0),
      window._gsDefine(
          "easing.Back",
          ["easing.Ease"],
          function (t) {
              var e,
                  i,
                  s,
                  r = window.GreenSockGlobals || window,
                  n = r.com.greensock,
                  a = 2 * Math.PI,
                  o = Math.PI / 2,
                  l = n._class,
                  h = function (e, i) {
                      var s = l("easing." + e, function () {}, !0),
                          r = (s.prototype = new t());
                      return (r.constructor = s), (r.getRatio = i), s;
                  },
                  p = t.register || function () {},
                  u = function (t, e, i, s) {
                      var r = l("easing." + t, { easeOut: new e(), easeIn: new i(), easeInOut: new s() }, !0);
                      return p(r, t), r;
                  },
                  c = function (t, e, i) {
                      (this.t = t), (this.v = e), i && ((this.next = i), (i.prev = this), (this.c = i.v - e), (this.gap = i.t - t));
                  },
                  _ = function (e, i) {
                      var s = l(
                              "easing." + e,
                              function (t) {
                                  (this._p1 = t || 0 === t ? t : 1.70158), (this._p2 = 1.525 * this._p1);
                              },
                              !0
                          ),
                          r = (s.prototype = new t());
                      return (
                          (r.constructor = s),
                          (r.getRatio = i),
                          (r.config = function (t) {
                              return new s(t);
                          }),
                          s
                      );
                  },
                  f = u(
                      "Back",
                      _("BackOut", function (t) {
                          return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
                      }),
                      _("BackIn", function (t) {
                          return t * t * ((this._p1 + 1) * t - this._p1);
                      }),
                      _("BackInOut", function (t) {
                          return 1 > (t *= 2) ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2) : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
                      })
                  ),
                  d = l(
                      "easing.SlowMo",
                      function (t, e, i) {
                          (e = e || 0 === e ? e : 0.7), null == t ? (t = 0.7) : t > 1 && (t = 1), (this._p = 1 !== t ? e : 0), (this._p1 = (1 - t) / 2), (this._p2 = t), (this._p3 = this._p1 + this._p2), (this._calcEnd = !0 === i);
                      },
                      !0
                  ),
                  m = (d.prototype = new t());
              return (
                  (m.constructor = d),
                  (m.getRatio = function (t) {
                      var e = t + (0.5 - t) * this._p;
                      return this._p1 > t
                          ? this._calcEnd
                              ? 1 - (t = 1 - t / this._p1) * t
                              : e - (t = 1 - t / this._p1) * t * t * t * e
                          : t > this._p3
                          ? this._calcEnd
                              ? 1 - (t = (t - this._p3) / this._p1) * t
                              : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
                          : this._calcEnd
                          ? 1
                          : e;
                  }),
                  (d.ease = new d(0.7, 0.7)),
                  (m.config = d.config = function (t, e, i) {
                      return new d(t, e, i);
                  }),
                  ((m = (e = l(
                      "easing.SteppedEase",
                      function (t) {
                          (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
                      },
                      !0
                  )).prototype = new t()).constructor = e),
                  (m.getRatio = function (t) {
                      return 0 > t ? (t = 0) : t >= 1 && (t = 0.999999999), ((this._p2 * t) >> 0) * this._p1;
                  }),
                  (m.config = e.config = function (t) {
                      return new e(t);
                  }),
                  ((m = (i = l(
                      "easing.RoughEase",
                      function (e) {
                          for (
                              var i,
                                  s,
                                  r,
                                  n,
                                  a,
                                  o,
                                  l = (e = e || {}).taper || "none",
                                  h = [],
                                  p = 0,
                                  u = 0 | (e.points || 20),
                                  _ = u,
                                  f = !1 !== e.randomize,
                                  d = !0 === e.clamp,
                                  m = e.template instanceof t ? e.template : null,
                                  g = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                              --_ > -1;

                          )
                              (i = f ? Math.random() : (1 / u) * _),
                                  (s = m ? m.getRatio(i) : i),
                                  "none" === l ? (r = g) : "out" === l ? (r = (n = 1 - i) * n * g) : "in" === l ? (r = i * i * g) : 0.5 > i ? (r = 0.5 * (n = 2 * i) * n * g) : (r = 0.5 * (n = 2 * (1 - i)) * n * g),
                                  f ? (s += Math.random() * r - 0.5 * r) : _ % 2 ? (s += 0.5 * r) : (s -= 0.5 * r),
                                  d && (s > 1 ? (s = 1) : 0 > s && (s = 0)),
                                  (h[p++] = { x: i, y: s });
                          for (
                              h.sort(function (t, e) {
                                  return t.x - e.x;
                              }),
                                  o = new c(1, 1, null),
                                  _ = u;
                              --_ > -1;

                          )
                              (a = h[_]), (o = new c(a.x, a.y, o));
                          this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
                      },
                      !0
                  )).prototype = new t()).constructor = i),
                  (m.getRatio = function (t) {
                      var e = this._prev;
                      if (t > e.t) {
                          for (; e.next && t >= e.t; ) e = e.next;
                          e = e.prev;
                      } else for (; e.prev && e.t >= t; ) e = e.prev;
                      return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
                  }),
                  (m.config = function (t) {
                      return new i(t);
                  }),
                  (i.ease = new i()),
                  u(
                      "Bounce",
                      h("BounceOut", function (t) {
                          return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                      }),
                      h("BounceIn", function (t) {
                          return 1 / 2.75 > (t = 1 - t)
                              ? 1 - 7.5625 * t * t
                              : 2 / 2.75 > t
                              ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                              : 2.5 / 2.75 > t
                              ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                              : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
                      }),
                      h("BounceInOut", function (t) {
                          var e = 0.5 > t;
                          return (
                              (t =
                                  1 / 2.75 > (t = e ? 1 - 2 * t : 2 * t - 1)
                                      ? 7.5625 * t * t
                                      : 2 / 2.75 > t
                                      ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                                      : 2.5 / 2.75 > t
                                      ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                                      : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                              e ? 0.5 * (1 - t) : 0.5 * t + 0.5
                          );
                      })
                  ),
                  u(
                      "Circ",
                      h("CircOut", function (t) {
                          return Math.sqrt(1 - (t -= 1) * t);
                      }),
                      h("CircIn", function (t) {
                          return -(Math.sqrt(1 - t * t) - 1);
                      }),
                      h("CircInOut", function (t) {
                          return 1 > (t *= 2) ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                      })
                  ),
                  u(
                      "Elastic",
                      (s = function (e, i, s) {
                          var r = l(
                                  "easing." + e,
                                  function (t, e) {
                                      (this._p1 = t || 1), (this._p2 = e || s), (this._p3 = (this._p2 / a) * (Math.asin(1 / this._p1) || 0));
                                  },
                                  !0
                              ),
                              n = (r.prototype = new t());
                          return (
                              (n.constructor = r),
                              (n.getRatio = i),
                              (n.config = function (t, e) {
                                  return new r(t, e);
                              }),
                              r
                          );
                      })(
                          "ElasticOut",
                          function (t) {
                              return this._p1 * Math.pow(2, -10 * t) * Math.sin(((t - this._p3) * a) / this._p2) + 1;
                          },
                          0.3
                      ),
                      s(
                          "ElasticIn",
                          function (t) {
                              return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2);
                          },
                          0.3
                      ),
                      s(
                          "ElasticInOut",
                          function (t) {
                              return 1 > (t *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2) : 0.5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - this._p3) * a) / this._p2) + 1;
                          },
                          0.45
                      )
                  ),
                  u(
                      "Expo",
                      h("ExpoOut", function (t) {
                          return 1 - Math.pow(2, -10 * t);
                      }),
                      h("ExpoIn", function (t) {
                          return Math.pow(2, 10 * (t - 1)) - 0.001;
                      }),
                      h("ExpoInOut", function (t) {
                          return 1 > (t *= 2) ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
                      })
                  ),
                  u(
                      "Sine",
                      h("SineOut", function (t) {
                          return Math.sin(t * o);
                      }),
                      h("SineIn", function (t) {
                          return 1 - Math.cos(t * o);
                      }),
                      h("SineInOut", function (t) {
                          return -0.5 * (Math.cos(Math.PI * t) - 1);
                      })
                  ),
                  l(
                      "easing.EaseLookup",
                      {
                          find: function (e) {
                              return t.map[e];
                          },
                      },
                      !0
                  ),
                  p(r.SlowMo, "SlowMo", "ease,"),
                  p(i, "RoughEase", "ease,"),
                  p(e, "SteppedEase", "ease,"),
                  f
              );
          },
          !0
      );
}),
  (function (t) {
      "use strict";
      var e = t.GreenSockGlobals || t;
      if (!e.TweenLite) {
          var i,
              s,
              r,
              n,
              a,
              o = function (t) {
                  var i,
                      s = t.split("."),
                      r = e;
                  for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
                  return r;
              },
              l = o("com.greensock"),
              h = 1e-10,
              p = [].slice,
              u = function () {},
              c = (function () {
                  var t = Object.prototype.toString,
                      e = t.call([]);
                  return function (i) {
                      return i instanceof Array || ("object" == typeof i && !!i.push && t.call(i) === e);
                  };
              })(),
              _ = {},
              f = function (i, s, r, n) {
                  (this.sc = _[i] ? _[i].sc : []), (_[i] = this), (this.gsClass = null), (this.func = r);
                  var a = [];
                  (this.check = function (l) {
                      for (var h, p, u, c, d = s.length, m = d; --d > -1; ) (h = _[s[d]] || new f(s[d], [])).gsClass ? ((a[d] = h.gsClass), m--) : l && h.sc.push(this);
                      if (0 === m && r)
                          for (
                              u = (p = ("com.greensock." + i).split(".")).pop(),
                                  c = o(p.join("."))[u] = this.gsClass = r.apply(r, a),
                                  n &&
                                      ((e[u] = c),
                                      "function" == typeof define && define.amd
                                          ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function () {
                                                return c;
                                            })
                                          : "undefined" != typeof module && module.exports && (module.exports = c)),
                                  d = 0;
                              this.sc.length > d;
                              d++
                          )
                              this.sc[d].check();
                  }),
                      this.check(!0);
              },
              d = (t._gsDefine = function (t, e, i, s) {
                  return new f(t, e, i, s);
              }),
              m = (l._class = function (t, e, i) {
                  return (
                      (e = e || function () {}),
                      d(
                          t,
                          [],
                          function () {
                              return e;
                          },
                          i
                      ),
                      e
                  );
              });
          d.globals = e;
          var g = [0, 0, 1, 1],
              v = [],
              y = m(
                  "easing.Ease",
                  function (t, e, i, s) {
                      (this._func = t), (this._type = i || 0), (this._power = s || 0), (this._params = e ? g.concat(e) : g);
                  },
                  !0
              ),
              x = (y.map = {}),
              b = (y.register = function (t, e, i, s) {
                  for (var r, n, a, o, h = e.split(","), p = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --p > -1; )
                      for (n = h[p], r = s ? m("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1; ) (o = u[a]), (x[n + "." + o] = x[o + n] = r[o] = t.getRatio ? t : t[o] || new t());
              });
          for (
              (r = y.prototype)._calcEnd = !1,
                  r.getRatio = function (t) {
                      if (this._func) return (this._params[0] = t), this._func.apply(null, this._params);
                      var e = this._type,
                          i = this._power,
                          s = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
                      return 1 === i ? (s *= s) : 2 === i ? (s *= s * s) : 3 === i ? (s *= s * s * s) : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : 0.5 > t ? s / 2 : 1 - s / 2;
                  },
                  s = (i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
              --s > -1;

          )
              (r = i[s] + ",Power" + s), b(new y(null, null, 1, s), r, "easeOut", !0), b(new y(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), b(new y(null, null, 3, s), r, "easeInOut");
          (x.linear = l.easing.Linear.easeIn), (x.swing = l.easing.Quad.easeInOut);
          var T = m("events.EventDispatcher", function (t) {
              (this._listeners = {}), (this._eventTarget = t || this);
          });
          ((r = T.prototype).addEventListener = function (t, e, i, s, r) {
              r = r || 0;
              var o,
                  l,
                  h = this._listeners[t],
                  p = 0;
              for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1; ) (o = h[l]).c === e && o.s === i ? h.splice(l, 1) : 0 === p && r > o.pr && (p = l + 1);
              h.splice(p, 0, { c: e, s: i, up: s, pr: r }), this !== n || a || n.wake();
          }),
              (r.removeEventListener = function (t, e) {
                  var i,
                      s = this._listeners[t];
                  if (s) for (i = s.length; --i > -1; ) if (s[i].c === e) return void s.splice(i, 1);
              }),
              (r.dispatchEvent = function (t) {
                  var e,
                      i,
                      s,
                      r = this._listeners[t];
                  if (r) for (e = r.length, i = this._eventTarget; --e > -1; ) (s = r[e]).up ? s.c.call(s.s || i, { type: t, target: i }) : s.c.call(s.s || i);
              });
          var w = t.requestAnimationFrame,
              P = t.cancelAnimationFrame,
              k =
                  Date.now ||
                  function () {
                      return new Date().getTime();
                  },
              S = k();
          for (s = (i = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !w; ) (w = t[i[s] + "RequestAnimationFrame"]), (P = t[i[s] + "CancelAnimationFrame"] || t[i[s] + "CancelRequestAnimationFrame"]);
          m("Ticker", function (t, e) {
              var i,
                  s,
                  r,
                  o,
                  l,
                  h = this,
                  p = k(),
                  c = !1 !== e && w,
                  _ = function (t) {
                      (S = k()), (h.time = (S - p) / 1e3);
                      var e,
                          n = h.time - l;
                      (!i || n > 0 || !0 === t) && (h.frame++, (l += n + (n >= o ? 0.004 : o - n)), (e = !0)), !0 !== t && (r = s(_)), e && h.dispatchEvent("tick");
                  };
              T.call(h),
                  (h.time = h.frame = 0),
                  (h.tick = function () {
                      _(!0);
                  }),
                  (h.sleep = function () {
                      null != r && (c && P ? P(r) : clearTimeout(r), (s = u), (r = null), h === n && (a = !1));
                  }),
                  (h.wake = function () {
                      null !== r && h.sleep(),
                          (s =
                              0 === i
                                  ? u
                                  : c && w
                                  ? w
                                  : function (t) {
                                        return setTimeout(t, 0 | (1e3 * (l - h.time) + 1));
                                    }),
                          h === n && (a = !0),
                          _(2);
                  }),
                  (h.fps = function (t) {
                      return arguments.length ? ((o = 1 / ((i = t) || 60)), (l = this.time + o), void h.wake()) : i;
                  }),
                  (h.useRAF = function (t) {
                      return arguments.length ? (h.sleep(), (c = t), void h.fps(i)) : c;
                  }),
                  h.fps(t),
                  setTimeout(function () {
                      c && (!r || 5 > h.frame) && h.useRAF(!1);
                  }, 1500);
          }),
              ((r = l.Ticker.prototype = new l.events.EventDispatcher()).constructor = l.Ticker);
          var C = m("core.Animation", function (t, e) {
              if (
                  ((this.vars = e = e || {}),
                  (this._duration = this._totalDuration = t || 0),
                  (this._delay = Number(e.delay) || 0),
                  (this._timeScale = 1),
                  (this._active = !0 === e.immediateRender),
                  (this.data = e.data),
                  (this._reversed = !0 === e.reversed),
                  E)
              ) {
                  a || n.wake();
                  var i = this.vars.useFrames ? N : E;
                  i.add(this, i._time), this.vars.paused && this.paused(!0);
              }
          });
          (n = C.ticker = new l.Ticker()),
              ((r = C.prototype)._dirty = r._gc = r._initted = r._paused = !1),
              (r._totalTime = r._time = 0),
              (r._rawPrevTime = -1),
              (r._next = r._last = r._onUpdate = r._timeline = r.timeline = null),
              (r._paused = !1);
          var I = function () {
              a && k() - S > 2e3 && n.wake(), setTimeout(I, 2e3);
          };
          I(),
              (r.play = function (t, e) {
                  return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1);
              }),
              (r.pause = function (t, e) {
                  return arguments.length && this.seek(t, e), this.paused(!0);
              }),
              (r.resume = function (t, e) {
                  return arguments.length && this.seek(t, e), this.paused(!1);
              }),
              (r.seek = function (t, e) {
                  return this.totalTime(Number(t), !1 !== e);
              }),
              (r.restart = function (t, e) {
                  return this.reversed(!1)
                      .paused(!1)
                      .totalTime(t ? -this._delay : 0, !1 !== e, !0);
              }),
              (r.reverse = function (t, e) {
                  return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
              }),
              (r.render = function () {}),
              (r.invalidate = function () {
                  return this;
              }),
              (r.isActive = function () {
                  var t,
                      e = this._timeline,
                      i = this._startTime;
                  return !e || (!this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t);
              }),
              (r._enabled = function (t, e) {
                  return (
                      a || n.wake(),
                      (this._gc = !t),
                      (this._active = this.isActive()),
                      !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                      !1
                  );
              }),
              (r._kill = function () {
                  return this._enabled(!1, !1);
              }),
              (r.kill = function (t, e) {
                  return this._kill(t, e), this;
              }),
              (r._uncache = function (t) {
                  for (var e = t ? this : this.timeline; e; ) (e._dirty = !0), (e = e.timeline);
                  return this;
              }),
              (r._swapSelfInParams = function (t) {
                  for (var e = t.length, i = t.concat(); --e > -1; ) "{self}" === t[e] && (i[e] = this);
                  return i;
              }),
              (r.eventCallback = function (t, e, i, s) {
                  if ("on" === (t || "").substr(0, 2)) {
                      var r = this.vars;
                      if (1 === arguments.length) return r[t];
                      null == e ? delete r[t] : ((r[t] = e), (r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i), (r[t + "Scope"] = s)), "onUpdate" === t && (this._onUpdate = e);
                  }
                  return this;
              }),
              (r.delay = function (t) {
                  return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), (this._delay = t), this) : this._delay;
              }),
              (r.duration = function (t) {
                  return arguments.length
                      ? ((this._duration = this._totalDuration = t),
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                        this)
                      : ((this._dirty = !1), this._duration);
              }),
              (r.totalDuration = function (t) {
                  return (this._dirty = !1), arguments.length ? this.duration(t) : this._totalDuration;
              }),
              (r.time = function (t, e) {
                  return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
              }),
              (r.totalTime = function (t, e, i) {
                  if ((a || n.wake(), !arguments.length)) return this._totalTime;
                  if (this._timeline) {
                      if ((0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming)) {
                          this._dirty && this.totalDuration();
                          var s = this._totalDuration,
                              r = this._timeline;
                          if ((t > s && !i && (t = s), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                              for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline);
                      }
                      this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && this.render(t, e, !1);
                  }
                  return this;
              }),
              (r.progress = r.totalProgress = function (t, e) {
                  return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
              }),
              (r.startTime = function (t) {
                  return arguments.length ? (t !== this._startTime && ((this._startTime = t), this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
              }),
              (r.timeScale = function (t) {
                  if (!arguments.length) return this._timeScale;
                  if (((t = t || h), this._timeline && this._timeline.smoothChildTiming)) {
                      var e = this._pauseTime,
                          i = e || 0 === e ? e : this._timeline.totalTime();
                      this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
                  }
                  return (this._timeScale = t), this._uncache(!1);
              }),
              (r.reversed = function (t) {
                  return arguments.length ? (t != this._reversed && ((this._reversed = t), this.totalTime(this._totalTime, !0)), this) : this._reversed;
              }),
              (r.paused = function (t) {
                  if (!arguments.length) return this._paused;
                  if (t != this._paused && this._timeline) {
                      a || t || n.wake();
                      var e = this._timeline,
                          i = e.rawTime(),
                          s = i - this._pauseTime;
                      !t && e.smoothChildTiming && ((this._startTime += s), this._uncache(!1)),
                          (this._pauseTime = t ? i : null),
                          (this._paused = t),
                          (this._active = this.isActive()),
                          !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0);
                  }
                  return this._gc && !t && this._enabled(!0, !1), this;
              });
          var L = m("core.SimpleTimeline", function (t) {
              C.call(this, 0, t), (this.autoRemoveChildren = this.smoothChildTiming = !0);
          });
          ((r = L.prototype = new C()).constructor = L),
              (r.kill()._gc = !1),
              (r._first = r._last = null),
              (r._sortChildren = !1),
              (r.add = r.insert = function (t, e) {
                  var i, s;
                  if (
                      ((t._startTime = Number(e || 0) + t._delay),
                      t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                      t.timeline && t.timeline._remove(t, !0),
                      (t.timeline = t._timeline = this),
                      t._gc && t._enabled(!0, !0),
                      (i = this._last),
                      this._sortChildren)
                  )
                      for (s = t._startTime; i && i._startTime > s; ) i = i._prev;
                  return i ? ((t._next = i._next), (i._next = t)) : ((t._next = this._first), (this._first = t)), t._next ? (t._next._prev = t) : (this._last = t), (t._prev = i), this._timeline && this._uncache(!0), this;
              }),
              (r._remove = function (t, e) {
                  return (
                      t.timeline === this &&
                          (e || t._enabled(!1, !0),
                          (t.timeline = null),
                          t._prev ? (t._prev._next = t._next) : this._first === t && (this._first = t._next),
                          t._next ? (t._next._prev = t._prev) : this._last === t && (this._last = t._prev),
                          this._timeline && this._uncache(!0)),
                      this
                  );
              }),
              (r.render = function (t, e, i) {
                  var s,
                      r = this._first;
                  for (this._totalTime = this._time = this._rawPrevTime = t; r; )
                      (s = r._next),
                          (r._active || (t >= r._startTime && !r._paused)) &&
                              (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                          (r = s);
              }),
              (r.rawTime = function () {
                  return a || n.wake(), this._totalTime;
              });
          var R = m(
                  "TweenLite",
                  function (e, i, s) {
                      if ((C.call(this, i, s), (this.render = R.prototype.render), null == e)) throw "Cannot tween a null target.";
                      this.target = e = "string" != typeof e ? e : R.selector(e) || e;
                      var r,
                          n,
                          a,
                          o = e.jquery || (e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
                          l = this.vars.overwrite;
                      if (((this._overwrite = l = null == l ? j[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : j[l]), (o || e instanceof Array || (e.push && c(e))) && "number" != typeof e[0]))
                          for (this._targets = a = p.call(e, 0), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)
                              (n = a[r])
                                  ? "string" != typeof n
                                      ? n.length && n !== t && n[0] && (n[0] === t || (n[0].nodeType && n[0].style && !n.nodeType))
                                          ? (a.splice(r--, 1), (this._targets = a = a.concat(p.call(n, 0))))
                                          : ((this._siblings[r] = F(n, this, !1)), 1 === l && this._siblings[r].length > 1 && z(n, this, null, 1, this._siblings[r]))
                                      : "string" == typeof (n = a[r--] = R.selector(n)) && a.splice(r + 1, 1)
                                  : a.splice(r--, 1);
                      else (this._propLookup = {}), (this._siblings = F(e, this, !1)), 1 === l && this._siblings.length > 1 && z(e, this, null, 1, this._siblings);
                      (this.vars.immediateRender || (0 === i && 0 === this._delay && !1 !== this.vars.immediateRender)) && this.render(-this._delay, !1, !0);
                  },
                  !0
              ),
              D = function (e) {
                  return e.length && e !== t && e[0] && (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType));
              };
          ((r = R.prototype = new C()).constructor = R),
              (r.kill()._gc = !1),
              (r.ratio = 0),
              (r._firstPT = r._targets = r._overwrittenProps = r._startAt = null),
              (r._notifyPluginsOfEnabled = !1),
              (R.version = "1.11.2"),
              (R.defaultEase = r._ease = new y(null, null, 1, 1)),
              (R.defaultOverwrite = "auto"),
              (R.ticker = n),
              (R.autoSleep = !0),
              (R.selector =
                  t.$ ||
                  t.jQuery ||
                  function (e) {
                      return t.$ ? ((R.selector = t.$), t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e;
                  });
          var O = (R._internals = { isArray: c, isSelector: D }),
              A = (R._plugins = {}),
              U = (R._tweenLookup = {}),
              W = 0,
              M = (O.reservedProps = {
                  ease: 1,
                  delay: 1,
                  overwrite: 1,
                  onComplete: 1,
                  onCompleteParams: 1,
                  onCompleteScope: 1,
                  useFrames: 1,
                  runBackwards: 1,
                  startAt: 1,
                  onUpdate: 1,
                  onUpdateParams: 1,
                  onUpdateScope: 1,
                  onStart: 1,
                  onStartParams: 1,
                  onStartScope: 1,
                  onReverseComplete: 1,
                  onReverseCompleteParams: 1,
                  onReverseCompleteScope: 1,
                  onRepeat: 1,
                  onRepeatParams: 1,
                  onRepeatScope: 1,
                  easeParams: 1,
                  yoyo: 1,
                  immediateRender: 1,
                  repeat: 1,
                  repeatDelay: 1,
                  data: 1,
                  paused: 1,
                  reversed: 1,
                  autoCSS: 1,
              }),
              j = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
              N = (C._rootFramesTimeline = new L()),
              E = (C._rootTimeline = new L());
          (E._startTime = n.time),
              (N._startTime = n.frame),
              (E._active = N._active = !0),
              (C._updateRoot = function () {
                  if ((E.render((n.time - E._startTime) * E._timeScale, !1, !1), N.render((n.frame - N._startTime) * N._timeScale, !1, !1), !(n.frame % 120))) {
                      var t, e, i;
                      for (i in U) {
                          for (t = (e = U[i].tweens).length; --t > -1; ) e[t]._gc && e.splice(t, 1);
                          0 === e.length && delete U[i];
                      }
                      if ((!(i = E._first) || i._paused) && R.autoSleep && !N._first && 1 === n._listeners.tick.length) {
                          for (; i && i._paused; ) i = i._next;
                          i || n.sleep();
                      }
                  }
              }),
              n.addEventListener("tick", C._updateRoot);
          var F = function (t, e, i) {
                  var s,
                      r,
                      n = t._gsTweenID;
                  if ((U[n || (t._gsTweenID = n = "t" + W++)] || (U[n] = { target: t, tweens: [] }), e && (((s = U[n].tweens)[(r = s.length)] = e), i))) for (; --r > -1; ) s[r] === e && s.splice(r, 1);
                  return U[n].tweens;
              },
              z = function (t, e, i, s, r) {
                  var n, a, o, l;
                  if (1 === s || s >= 4) {
                      for (l = r.length, n = 0; l > n; n++)
                          if ((o = r[n]) !== e) o._gc || (o._enabled(!1, !1) && (a = !0));
                          else if (5 === s) break;
                      return a;
                  }
                  var p,
                      u = e._startTime + h,
                      c = [],
                      _ = 0,
                      f = 0 === e._duration;
                  for (n = r.length; --n > -1; )
                      (o = r[n]) === e ||
                          o._gc ||
                          o._paused ||
                          (o._timeline !== e._timeline
                              ? ((p = p || V(e, 0, f)), 0 === V(o, p, f) && (c[_++] = o))
                              : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale + h > u && (((f || !o._initted) && 2e-10 >= u - o._startTime) || (c[_++] = o)));
                  for (n = _; --n > -1; ) (o = c[n]), 2 === s && o._kill(i, t) && (a = !0), (2 !== s || (!o._firstPT && o._initted)) && o._enabled(!1, !1) && (a = !0);
                  return a;
              },
              V = function (t, e, i) {
                  for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline; ) {
                      if (((n += s._startTime), (r *= s._timeScale), s._paused)) return -100;
                      s = s._timeline;
                  }
                  return (n /= r) > e ? n - e : (i && n === e) || (!t._initted && 2 * h > n - e) ? h : (n += t.totalDuration() / t._timeScale / r) > e + h ? 0 : n - e - h;
              };
          (r._init = function () {
              var t,
                  e,
                  i,
                  s,
                  r = this.vars,
                  n = this._overwrittenProps,
                  a = this._duration,
                  o = r.immediateRender,
                  l = r.ease;
              if (r.startAt) {
                  if ((this._startAt && this._startAt.render(-1, !0), (r.startAt.overwrite = 0), (r.startAt.immediateRender = !0), (this._startAt = R.to(this.target, 0, r.startAt)), o))
                      if (this._time > 0) this._startAt = null;
                      else if (0 !== a) return;
              } else if (r.runBackwards && 0 !== a)
                  if (this._startAt) this._startAt.render(-1, !0), (this._startAt = null);
                  else {
                      for (s in ((i = {}), r)) (M[s] && "autoCSS" !== s) || (i[s] = r[s]);
                      if (((i.overwrite = 0), (i.data = "isFromStart"), (this._startAt = R.to(this.target, 0, i)), r.immediateRender)) {
                          if (0 === this._time) return;
                      } else this._startAt.render(-1, !0);
                  }
              if (
                  ((this._ease = l ? (l instanceof y ? (r.easeParams instanceof Array ? l.config.apply(l, r.easeParams) : l) : "function" == typeof l ? new y(l, r.easeParams) : x[l] || R.defaultEase) : R.defaultEase),
                  (this._easeType = this._ease._type),
                  (this._easePower = this._ease._power),
                  (this._firstPT = null),
                  this._targets)
              )
                  for (t = this._targets.length; --t > -1; ) this._initProps(this._targets[t], (this._propLookup[t] = {}), this._siblings[t], n ? n[t] : null) && (e = !0);
              else e = this._initProps(this.target, this._propLookup, this._siblings, n);
              if ((e && R._onPluginEvent("_onInitAllProps", this), n && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), r.runBackwards))
                  for (i = this._firstPT; i; ) (i.s += i.c), (i.c = -i.c), (i = i._next);
              (this._onUpdate = r.onUpdate), (this._initted = !0);
          }),
              (r._initProps = function (e, i, s, r) {
                  var n, a, o, l, h, p;
                  if (null == e) return !1;
                  for (n in (this.vars.css ||
                      (e.style &&
                          e !== t &&
                          e.nodeType &&
                          A.css &&
                          !1 !== this.vars.autoCSS &&
                          (function (t, e) {
                              var i,
                                  s = {};
                              for (i in t) M[i] || (i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i) || !(!A[i] || (A[i] && A[i]._autoCSS)) || ((s[i] = t[i]), delete t[i]);
                              t.css = s;
                          })(this.vars, e)),
                  this.vars)) {
                      if (((p = this.vars[n]), M[n])) p && (p instanceof Array || (p.push && c(p))) && -1 !== p.join("").indexOf("{self}") && (this.vars[n] = p = this._swapSelfInParams(p, this));
                      else if (A[n] && (l = new A[n]())._onInitTween(e, this.vars[n], this)) {
                          for (this._firstPT = h = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: n, pg: !0, pr: l._priority }, a = l._overwriteProps.length; --a > -1; ) i[l._overwriteProps[a]] = this._firstPT;
                          (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0);
                      } else
                          (this._firstPT = i[n] = h = { _next: this._firstPT, t: e, p: n, f: "function" == typeof e[n], n: n, pg: !1, pr: 0 }),
                              (h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n])),
                              (h.c = "string" == typeof p && "=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * Number(p.substr(2)) : Number(p) - h.s || 0);
                      h && h._next && (h._next._prev = h);
                  }
                  return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && z(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : o;
              }),
              (r.render = function (t, e, i) {
                  var s,
                      r,
                      n,
                      a,
                      o = this._time,
                      l = this._duration;
                  if (t >= l)
                      (this._totalTime = this._time = l),
                          (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                          this._reversed || ((s = !0), (r = "onComplete")),
                          0 === l && ((a = this._rawPrevTime), (0 === t || 0 > a || a === h) && a !== t && ((i = !0), a > h && (r = "onReverseComplete")), (this._rawPrevTime = a = !e || t ? t : h));
                  else if (1e-7 > t)
                      (this._totalTime = this._time = 0),
                          (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                          (0 !== o || (0 === l && this._rawPrevTime > h)) && ((r = "onReverseComplete"), (s = this._reversed)),
                          0 > t ? ((this._active = !1), 0 === l && (this._rawPrevTime >= 0 && (i = !0), (this._rawPrevTime = a = !e || t ? t : h))) : this._initted || (i = !0);
                  else if (((this._totalTime = this._time = t), this._easeType)) {
                      var p = t / l,
                          u = this._easeType,
                          c = this._easePower;
                      (1 === u || (3 === u && p >= 0.5)) && (p = 1 - p),
                          3 === u && (p *= 2),
                          1 === c ? (p *= p) : 2 === c ? (p *= p * p) : 3 === c ? (p *= p * p * p) : 4 === c && (p *= p * p * p * p),
                          (this.ratio = 1 === u ? 1 - p : 2 === u ? p : 0.5 > t / l ? p / 2 : 1 - p / 2);
                  } else this.ratio = this._ease.getRatio(t / l);
                  if (this._time !== o || i) {
                      if (!this._initted) {
                          if ((this._init(), !this._initted || this._gc)) return;
                          this._time && !s ? (this.ratio = this._ease.getRatio(this._time / l)) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                      }
                      for (
                          this._active || (!this._paused && this._time !== o && t >= 0 && (this._active = !0)),
                              0 === o &&
                                  (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")),
                                  this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))),
                              n = this._firstPT;
                          n;

                      )
                          n.f ? n.t[n.p](n.c * this.ratio + n.s) : (n.t[n.p] = n.c * this.ratio + n.s), (n = n._next);
                      this._onUpdate &&
                          (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (i && 0 === this._time && 0 === o) || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)),
                          r &&
                              (this._gc ||
                                  (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                                  s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                  !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || v),
                                  0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0)));
                  }
              }),
              (r._kill = function (t, e) {
                  if (("all" === t && (t = null), null == t && (null == e || e === this.target))) return this._enabled(!1, !1);
                  var i, s, r, n, a, o, l, h;
                  if (((e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e), (c(e) || D(e)) && "number" != typeof e[0])) for (i = e.length; --i > -1; ) this._kill(t, e[i]) && (o = !0);
                  else {
                      if (this._targets) {
                          for (i = this._targets.length; --i > -1; )
                              if (e === this._targets[i]) {
                                  (a = this._propLookup[i] || {}), (this._overwrittenProps = this._overwrittenProps || []), (s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all");
                                  break;
                              }
                      } else {
                          if (e !== this.target) return !1;
                          (a = this._propLookup), (s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all");
                      }
                      if (a) {
                          for (r in ((l = t || a), (h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill)), l))
                              (n = a[r]) &&
                                  (n.pg && n.t._kill(l) && (o = !0),
                                  (n.pg && 0 !== n.t._overwriteProps.length) || (n._prev ? (n._prev._next = n._next) : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), (n._next = n._prev = null)),
                                  delete a[r]),
                                  h && (s[r] = 1);
                          !this._firstPT && this._initted && this._enabled(!1, !1);
                      }
                  }
                  return o;
              }),
              (r.invalidate = function () {
                  return (
                      this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this),
                      (this._firstPT = null),
                      (this._overwrittenProps = null),
                      (this._onUpdate = null),
                      (this._startAt = null),
                      (this._initted = this._active = this._notifyPluginsOfEnabled = !1),
                      (this._propLookup = this._targets ? {} : []),
                      this
                  );
              }),
              (r._enabled = function (t, e) {
                  if ((a || n.wake(), t && this._gc)) {
                      var i,
                          s = this._targets;
                      if (s) for (i = s.length; --i > -1; ) this._siblings[i] = F(s[i], this, !0);
                      else this._siblings = F(this.target, this, !0);
                  }
                  return C.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this);
              }),
              (R.to = function (t, e, i) {
                  return new R(t, e, i);
              }),
              (R.from = function (t, e, i) {
                  return (i.runBackwards = !0), (i.immediateRender = 0 != i.immediateRender), new R(t, e, i);
              }),
              (R.fromTo = function (t, e, i, s) {
                  return (s.startAt = i), (s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender), new R(t, e, s);
              }),
              (R.delayedCall = function (t, e, i, s, r) {
                  return new R(e, 0, { delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: s, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: s, immediateRender: !1, useFrames: r, overwrite: 0 });
              }),
              (R.set = function (t, e) {
                  return new R(t, 0, e);
              }),
              (R.getTweensOf = function (t, e) {
                  if (null == t) return [];
                  var i, s, r, n;
                  if (((t = "string" != typeof t ? t : R.selector(t) || t), (c(t) || D(t)) && "number" != typeof t[0])) {
                      for (i = t.length, s = []; --i > -1; ) s = s.concat(R.getTweensOf(t[i], e));
                      for (i = s.length; --i > -1; ) for (n = s[i], r = i; --r > -1; ) n === s[r] && s.splice(i, 1);
                  } else for (i = (s = F(t).concat()).length; --i > -1; ) (s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
                  return s;
              }),
              (R.killTweensOf = R.killDelayedCallsTo = function (t, e, i) {
                  "object" == typeof e && ((i = e), (e = !1));
                  for (var s = R.getTweensOf(t, e), r = s.length; --r > -1; ) s[r]._kill(i, t);
              });
          var X = m(
              "plugins.TweenPlugin",
              function (t, e) {
                  (this._overwriteProps = (t || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = e || 0), (this._super = X.prototype);
              },
              !0
          );
          if (
              ((r = X.prototype),
              (X.version = "1.10.1"),
              (X.API = 2),
              (r._firstPT = null),
              (r._addTween = function (t, e, i, s, r, n) {
                  var a, o;
                  return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)))
                      ? ((this._firstPT = o = { _next: this._firstPT, t: t, p: e, s: i, c: a, f: "function" == typeof t[e], n: r || e, r: n }), o._next && (o._next._prev = o), o)
                      : void 0;
              }),
              (r.setRatio = function (t) {
                  for (var e, i = this._firstPT; i; ) (e = i.c * t + i.s), i.r ? (e = 0 | (e + (e > 0 ? 0.5 : -0.5))) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.t[i.p](e) : (i.t[i.p] = e), (i = i._next);
              }),
              (r._kill = function (t) {
                  var e,
                      i = this._overwriteProps,
                      s = this._firstPT;
                  if (null != t[this._propName]) this._overwriteProps = [];
                  else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
                  for (; s; ) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? ((s._prev._next = s._next), (s._prev = null)) : this._firstPT === s && (this._firstPT = s._next)), (s = s._next);
                  return !1;
              }),
              (r._roundProps = function (t, e) {
                  for (var i = this._firstPT; i; ) (t[this._propName] || (null != i.n && t[i.n.split(this._propName + "_").join("")])) && (i.r = e), (i = i._next);
              }),
              (R._onPluginEvent = function (t, e) {
                  var i,
                      s,
                      r,
                      n,
                      a,
                      o = e._firstPT;
                  if ("_onInitAllProps" === t) {
                      for (; o; ) {
                          for (a = o._next, s = r; s && s.pr > o.pr; ) s = s._next;
                          (o._prev = s ? s._prev : n) ? (o._prev._next = o) : (r = o), (o._next = s) ? (s._prev = o) : (n = o), (o = a);
                      }
                      o = e._firstPT = r;
                  }
                  for (; o; ) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), (o = o._next);
                  return i;
              }),
              (X.activate = function (t) {
                  for (var e = t.length; --e > -1; ) t[e].API === X.API && (A[new t[e]()._propName] = t[e]);
                  return !0;
              }),
              (d.plugin = function (t) {
                  if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                  var e,
                      i = t.propName,
                      s = t.priority || 0,
                      r = t.overwriteProps,
                      n = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                      a = m(
                          "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
                          function () {
                              X.call(this, i, s), (this._overwriteProps = r || []);
                          },
                          !0 === t.global
                      ),
                      o = (a.prototype = new X(i));
                  for (e in ((o.constructor = a), (a.API = t.API), n)) "function" == typeof t[e] && (o[n[e]] = t[e]);
                  return (a.version = t.version), X.activate([a]), a;
              }),
              (i = t._gsQueue))
          ) {
              for (s = 0; i.length > s; s++) i[s]();
              for (r in _) _[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r);
          }
          a = !1;
      }
  })(window);
