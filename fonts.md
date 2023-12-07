# GoogleFontsの使い方
1.GoogleFontsへアクセス
    - [GoogleFonts](https://fonts.google.com/?subset=japanese)

2.右上の鞄マークをクリックして、中身を空にする<br>
- `¯\_(ツ)_/¯`が表示されていればOK<br>
- 表示されなければ、「Review」の⊖マークをクリックして空にする

3.使いたいフォントをクリックし、ページ中央当たりにある、<br>
「select ... ⊕」をクリック

4.右上の鞄マーク「View selected families」をクリック

5.ラジオボタンの`<link>`を選び、<br>`<link rel ...`のコードをコピー

6.HTMLファイルの`<head>`にそのままペーストする

7.フォントを適応させたいタグにclassを指定する<br>指定されているのであればそれでOK<br>
(例)
```HTML
<a>サンプル</a>
```
↓
```HTML
<a class="example">サンプル</a>
```
8.GoogleFontsの「CSS rules to specify families」をコピー
- CSS rules to specify familiesがない場合は、<br>
下記の「CSS rules to specify familiesが無い場合」を確認してください

9.CSSファイルでフォントを指定<br>
`<a class="example">サンプル</a>`に指定する場合は
```CSS
.example{
    ここにペースト
}
```

CSS rules to specify familiesが無い場合
 - 
CSSファイルで直接フォントを指定します<br>
フォント名はGoogleフォントは選択したフォントのページ上部にあります
「Designed by ...」の上部にあるはず

(例)class=exampleにフォント名「Shizuru」を指定
```CSS
.example{
    font-family: 'Shizuru';
}
```
