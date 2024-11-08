export default function LanguageSelection() {
    return (
        <>
            <div>
                <label htmlFor="cars">Select language</label>

                <select name="languages" id="languages" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <option className="block px-4 py-2 text-sm text-gray-700" value="af">Afrikaans</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ak">Akan</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sq">Albanian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="am">Amharic</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ar">Arabic</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hy">Armenian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="as">Assamese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ay">Aymara</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="az">Azerbaijani</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="bm">Bambara</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="eu">Basque</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="be">Belarusian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="bn">Bengali</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="bho">Bhojpuri</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="bs">Bosnian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="bg">Bulgarian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ca">Catalan</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ceb">Cebuano</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="zh">Chinese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="zh-Hant">Chinese (Traditional)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="co">Corsican</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hr">Croatian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="cs">Czech</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="da">Danish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="dv">Divehi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="nl">Dutch</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="en">English</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="eo">Esperanto</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="et">Estonian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ee">Ewe</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="fil">Filipino</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="fi">Finnish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="fr">French</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="fy">Frisian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="gl">Galician</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ka">Georgian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="de">German</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="el">Greek</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="gn">Guarani</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="gu">Gujarati</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ht">Haitian Creole</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ha">Hausa</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="haw">Hawaiian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="he">Hebrew</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hi">Hindi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hil">Hiligaynon</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ho">Hiri Motu</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hmn">Hmong</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="hu">Hungarian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="is">Icelandic</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ig">Igbo</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ilo">Ilocano</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="id">Indonesian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ga">Irish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="it">Italian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ja">Japanese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="jv">Javanese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="dyo">Jola-Fonyi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kea">Kabuverdianu (Cape Verdean Creole)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kl">Kalaallisut (Greenlandic)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kln">Kalenjin</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kam">Kamba</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kn">Kannada</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kr">Kanuri</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ks">Kashmiri</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kk">Kazakh</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="km">Khmer</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ki">Kikuyu</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="rw">Kinyarwanda</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tlh">Klingon</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kv">Komi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kg">Kongo</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ko">Korean</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kri">Krio</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="kj">Kuanyama</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ku">Kurdish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ky">Kyrgyz</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="lo">Lao</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="la">Latin</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="lv">Latvian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ln">Lingala</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="lt">Lithuanian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="lg">Luganda</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="lb">Luxembourgish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mai">Maithili</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mk">Macedonian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mg">Malagasy</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ms">Malay</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ml">Malayalam</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mt">Maltese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mi">Maori</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mr">Marathi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mh">Marshallese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="mn">Mongolian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="my">Myanmar (Burmese)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ne">Nepali</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="no">Norwegian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ny">Nyanja (Chichewa)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="or">Odia (Oriya)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="om">Oromo</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ps">Pashto</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="fa">Persian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="pl">Polish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="pt">Portuguese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="pa">Punjabi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="qu">Quechua</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ro">Romanian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ru">Russian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sm">Samoan</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sa">Sanskrit</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="gd">Scottish Gaelic</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sr">Serbian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="st">Sesotho</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sn">Shona</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sd">Sindhi</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="si">Sinhala (Sinhalese)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sk">Slovak</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sl">Slovenian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="so">Somali</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="es">Spanish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="su">Sundanese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sw">Swahili</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="sv">Swedish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tl">Tagalog (Filipino)</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tg">Tajik</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ta">Tamil</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tt">Tatar</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="te">Telugu</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="th">Thai</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ti">Tigrinya</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="to">Tongan</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tr">Turkish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="tk">Turkmen</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="uk">Ukrainian</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ur">Urdu</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="ug">Uyghur</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="uz">Uzbek</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="vi">Vietnamese</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="cy">Welsh</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="xh">Xhosa</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="yi">Yiddish</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="yo">Yoruba</option>
                    <option className="block px-4 py-2 text-sm text-gray-700" value="zu">Zulu</option>
                </select>
            </div>
        </>
    )
}


