(() => {
  let extRef = JSON.parse(localStorage.getItem("nuskin.account")).user.id;
  if (typeof QSI === "undefined") {
    QSI = {};
    QSI.config = {
      externalReference: extRef,
    };
  }
})();
