# HTML (HyperText Markup Language)

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

<!--
* XML, mint strukturált adatleíró nyelv
* HTML dokumentum alapvető felépítése (`html`, `head`, `body`)
* `head` rész egyes elemei (`title`, `favicon`)
* XML kommentek
* címsorok, bekezdések (`h1`-`h5`, `p`)
* szövegformázás, tagolás (`br`, `hr`, `small`, `sup` / `sub`, `span`, `div`)
* linkek (weboldal, email)
* képek (`img`, méretezés, alternatív cím)
* számozott és nem számozott listák (`ul`, `ol`, `li`)
* táblázatok (`table`, `tr`, `th`, `td`)
-->

## XML, mint strukturált adatleíró nyelv

Az XML (eXtensible Markup Language) egy univerzális, ember és gép által egyaránt olvasható adatleíró nyelv, amely adatok strukturált tárolására és átvitelére szolgál.

Példa:
```xml
<mail>
    <from>Anna</from>
    <to>Béla</to>
    <subject>Emlékeztető</subject>
    <message>Tárgyalás 14 órától a II. irodában.</message>
</mail>
```

A `mail`, `from`, `to`, stb. címkéket „tag”-eknek vagy elemeknek nevezzük.

A weboldalak tartalmát leíró HTML dokumentumok is XML nyelven íródnak, melyben különféle jelentésekkel bíró elemeket alkalmazhatunk a tartalom megjelenítésére.

## HTML dokumentum alapvető felépítése

Egy HTML dokumentum három fő részből áll: `<html>`, `<head>` és `<body>`.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Az oldal címe</title>
</head>
<body>
    <h1>Címsor 1</h1>
    <p>Ez egy bekezdés</p>
</body>
</html>
```

A `head` rész tartalmazza az oldal metaadatait, például a címet (`<title>`) és az ikont (`<link rel="icon">`).

```html
<head>
    <title>Hello World</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
```

## Kommentek

A HTML dokumentum tartalmazhat kommenteket, melyek a böngészőben a felhasználó számára nem olvashatóak, csak a HTML kódban láthatóak.

```xml
<!-- ismertető az ME-ről -->
<p>A Miskolci Egyetem felsőoktatási intézmény Miskolcon.
Az intézmény valódi universitasként, nyolc karon széles képzési...</p>
```

## Címsorok, bekezdések

A címsorokat a `<h1>`-`<h6>` elemekkel, míg a bekezdéseket a `<p>` elemmel lehet definiálni.

```html
<h1>1. szintű címsor</h1>
<p>Ez egy bekezdés.</p>

<h2>2. szintű címsor</h2>
<p>Ez egy bekezdés.</p>
<p>Ez is egy bekezdés.</p>
```

## Szövegformázás, tagolás

Az elemek, mint a `<br>`, `<hr>`, `<small>`, `<sup>` / `<sub>`, `<span>`, `<div>`, segítenek a szövegformázásban és a tagolásban.

```html
<p>Ez egy <small>kis méretű szöveg</small>.</p>
<p>Ez egy második sor <br> tördeléssel.</p>
<hr> <!-- ez egy vízszintes vonal -->
<p>Alsó és felsőindex: P<sub>i</sub> = I<sup>2</sup>R </p>

<!-- szövegrészlet formázása -->
<p>Ez egy <span style="font-weight: bold">vastag betűs</span> szöveg.</p>

<!-- minden gyerekelem formázása -->
<div style="font-weight: bold">
  <p>1. bekezdés</p>
  <p>2. bekezdés</p>
  <p>3. bekezdés</p>
</div>
```

## Linkek

Weboldalakra és email címekre is lehet hivatkozni linkekkel.

```html
<a href="index.html">Belső oldalra mutató link</a>
<a href="https://www.example.com">Külső weboldalra link</a>
<a href="mailto:info@example.com">Email link</a>
<a href="tel:0036301234567">Telefonszám link</a>
```

## Képek

Képek beillesztése az `<img>` elem segítségével történik, amelynek `src` attribútuma az elérési út a képhez, a `alt` attribútum pedig egy magyarázó szöveg.

```html
<img src="uni-miskolc-logo.jpg" alt="A Miskolci Egyetem logója">
```

## Számozott és nem számozott listák

A számozott listákhoz a `<ol>`, a nem számozott listákhoz pedig az `<ul>` elemek használatosak. A listaelemeket `<li>` tag jelöli.

```html
<!-- számozott lista -->
<ol>
    <li>Első elem</li>
    <li>Második elem</li>
</ol>

<!-- nem számozott lista -->
<ul>
    <li>Első elem</li>
    <li>Második elem</li>
</ul>
```

## Táblázatok

Táblázatok létrehozásához a következő elemeket kell használni:
  * `<table>`: a táblázat fő eleme
  * `<tr>`: tábla sor (table row)
  * `<th>`: tábla fejléc (table head)
  * `<td>`: tábla cella (table data)

```html
<table>
    <tr>
        <th>Termék</th>
        <th>Ár</th>
    </tr>
    <tr>
        <td>Alma</td>
        <td>500 Ft</td>
    </tr>
    <tr>
        <td>Körte</td>
        <td>400 Ft</td>
    </tr>
    <tr>
      <td colspan="2">Összesen: 900 Ft</td>
    </tr>
</table>
```

## Gyakorló feladat

Tetszőleges témájú (zene, film, termék, szolgáltatás, stb.) bemutató oldal készítése bekezdések, kép, link, táblázat és lista megjelenítésével.
