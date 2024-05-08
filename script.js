function cursor() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.x + "px",
        y: e.y + "px",
      });
    });
  }

cursor();

const language = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}


// let fromText = document.querySelector(".from-text")
// let transText = document.querySelector(".to-text")

// let languageOption = document.querySelectorAll("select")


// languageOption.forEach((get,con)=>{
//     for(let countryCode in language){

//         let selected;
//         if(con == 0 && countryCode =="en-GB"){
//             selected = "selected";
//         }else if(con== 1 && countryCode == "hi-IN"){
//             selected= "selected"
//         }


//         let option = ` <option value="${countryCode} " ${selected}>${language[countryCode]}</option>`
//         get.insertAdjacentHTML('beforeend',option)

//     }
// })

let fromText = document.querySelector(".from-text");
let transText = document.querySelector(".to-text");

let languageOption = document.querySelectorAll("select");

// Assuming language is defined elsewhere in your code
// let language = {
//   "en-GB": "English",
//   "hi-IN": "Hindi"
// };

languageOption.forEach((select, index) => {
  for (let countryCode in language) {
    let selected = "";
    if ((index == 0 && countryCode == "en-GB") || (index == 1 && countryCode == "hi-IN")) {
      selected = "selected";
    }
    let option = `<option value="${countryCode}" ${selected}>${language[countryCode]}</option>`;
    select.insertAdjacentHTML('beforeend', option);
  }
});

async function translateText() {
    const fromText = document.querySelector(".from-text");
    const translationResult = document.querySelector(".to-text");
    const sourceLanguageSelect = document.getElementById("source-language");
    const targetLanguageSelect = document.getElementById("target-language");
  
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '02f02aa142mshef4d54b10cc02f3p122256jsn337d77ccf78b',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      body: new URLSearchParams({
        q: fromText.value, // Translate the text from the input field
        target: targetLanguageSelect.value, // Get the selected target language
        source: sourceLanguageSelect.value // Get the selected source language
      })
    };
  
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const translatedText = data.data.translations[0].translatedText;
        translationResult.textContent = translatedText; // Display translated text
        console.log(translatedText);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the translateText function when translation is needed
  const translateButton = document.getElementById("translate-button");
  translateButton.addEventListener("click", translateText)



  