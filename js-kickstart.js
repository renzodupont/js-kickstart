/**
 * This file contains util functions to help you build applications quickly in any JS environment
 * You can use it in any non-comercial or comercial project without restrictions
 * Developer: Renzo Dupont - 2021 - StartUpp.Cloud by BenjaminLabs
 */

/**
 * Returns an Object with the number of instances of each word in a given text.
 * Sample return: { "hello" : 2, "world" : 1 }
 * @param {string} val
 * @returns {object}
 */
export const wordCount = (val) => {
  let charCounter = 0;
  let wordArray = val
    .replace(
      /[\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’“”'";/⁄·\&*@\•^†‡°”¡¿※#№÷×ºª%‰+−=‱¶′″‴§~_|‖¦©℗®℠™¤₳฿₵¢₡₢$₫₯֏₠€ƒ₣₲₴₭₺₾ℳ₥₦₧₱₰£៛₽₹₨₪৳₸₮₩¥]/g,
      ""
    )
    .split(" ");

  wordArray = wordArray
    .filter((item) => item.trim() !== "") // Filter empty keys
    .map((item) => {
      charCounter += item.trim().length;
      return item.trim();
    }); //Trims spaces from all words

  const wordSet = new Set(wordArray);

  wordArray.map((item) => {
    wordSet[item] = wordSet[item] ? wordSet[item] + 1 : 1;
  });

  return { ...wordSet };
};

/**
 * Gets the value of a paramater present in the URL of the page. If not present, returns null.
 * This function only works in Front End JS platforms.
 * @param {string} paramName
 * @returns {string|null}
 */
export const getUrlParameter = (paramName) => {
  let paramValue = null;
  let params = new URLSearchParams(window.location.search);

  for (let p of params) {
    if (p[0].toLocaleLowerCase() === paramName) {
      paramValue = p[1];
    }
  }

  return paramValue;
};

/**
 * Gets a date from a string like '2021-01-01' or another date instance in UTC to avoid issues with Time Zones.
 * @param {date|string} ini
 * @returns {date}
 */
export const getDate = (d) => {
  return d
    ? new Date(
        new Date(d).getUTCFullYear(),
        new Date(d).getUTCMonth(),
        new Date(d).getUTCDate()
      )
    : new Date(
        new Date().getUTCFullYear(),
        new Date().getUTCMonth(),
        new Date().getUTCDate()
      );
};

/**
 * Gets the difference in days between 2 dates. Parameters can be date instances or strings.
 * @param {date|string} first
 * @param {date|string} second
 * @returns {number}
 */
export const dayDiff = (first, second) => {
  return (getDate(first) - getDate(second)) / (1000 * 60 * 60 * 24);
};

/**
 * Returns the upper case version of a string. If null or undefined it returns an empty string
 * @param {object} t
 * @returns {string}
 */
export const toUpperCase = (t) => {
  return t ? t.toString().toUpperCase() : "";
};

/**
 * Mimics the functionality of an HTML link and opens a page in a separate browser tab
 * This function only works in Front End JS platforms.
 * @param {string} url
 */
export const openURLInNewTab = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.click();
};
