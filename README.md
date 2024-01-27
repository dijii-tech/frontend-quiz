-   [DIJI.TECH Frontend Quiz](#dijitech-frontend-quiz)
    -   [CSS (CASE-1)](#css-case-1)
    -   [JS (CASE-2)](#js-case-2)
        -   [Örnek 1:](#örnek-1)
        -   [Örnek 2:](#örnek-2)
        -   [Çözüm İçin Notlar](#çözüm-i̇çin-notlar)

# DIJI.TECH Frontend Quiz

Lütfen aşşağıdaki yönergeleri takip ederek görevleri tamamlayın.

## CSS (CASE-1)

Bu görevde verilen örnek resmi css ile yapmaya çalışacağız.

1.  task-1 klasörü içindeki [figure](case-1/figure.png) görselinin aynısını css ile yapın.
2.  `core.css` ve `script.js` koduna müdahale etmeyin.
3.  Kendi kodlarınızı `style.css` içine yazabilirsiniz.
4.  Gerekiyorsa `index.html` içine eklemeler yapabilirsiniz.

## JS (CASE-2)

Bir ayakkabı firması fabrikaları için en uzakta kalan şubesinin mesafesini hesaplamak istiyor.
Şehirler her zaman 1 km mesafededir, her bir şehirden sadece 1 şehire yol vardır ve yollar dairesel olarak birleşmez.

```
A <-> B <-> C <-> D <-> E
```

Firmanın en az 1 şehirde fabrikası ve her şehirde 1 şubesi olacaktır.
Bu koşullara göre şubelerin en yakın fabrikaya olan mesafelerinin en fazla kaç km olduğunu bulunuz.

### Örnek 1:

Fabrika olan şehiler `[_]` şeklinde gösterilmiştir.

```
[A] <-> B <-> C <-> D <-> [E]
```

-   `A` şehirindeki firmanın en yakın fabrikası `A` şehrindedir -> 0 km
-   `B` şehirindeki firmanın en yakın fabrikası `A` şehrindedir -> 1 km
-   `C` şehirindeki firmanın en yakın fabrikası `A` yada `E` şehrindedir -> 2 km
-   `D` şehirindeki firmanın en yakın fabrikası `E` şehrindedir -> 1 km
-   `E` şehirindeki firmanın en yakın fabrikası `E` şehrindedir -> 0 km

En uzak mesafe 2 km dir ve cevap 2 dir.

### Örnek 2:

Fabrika olan şehiler `[_]` şeklinde gösterilmiştir.

```
[A] <-> [B] <-> [C] <-> [D] <-> [E]
```

-   `A` şehirindeki firmanın en yakın fabrikası `A` şehrindedir -> 0 km
-   `B` şehirindeki firmanın en yakın fabrikası `B` şehrindedir -> 0 km
-   `C` şehirindeki firmanın en yakın fabrikası `C` şehrindedir -> 0 km
-   `D` şehirindeki firmanın en yakın fabrikası `D` şehrindedir -> 0 km
-   `E` şehirindeki firmanın en yakın fabrikası `E` şehrindedir -> 0 km

Her şehirde fabrika olduğu için en uzak mesafe 0 km dir ve cevap 0 dir.

### Çözüm İçin Notlar

-   `case_2.js` dosyası içinde bulunan `getInaccessibleFactory` fonksiyonunda çalışmalarınızı yapınız.
-   `0 < n < 10⁵` değeri şehir sayısıdır.
-   `0 < c <= n` değeri fabrikaların bulunduğu indexlerdir.

```js
function getInaccessibleFactory(n, c) {
    // n = 5
    // c = [4,0]
    ...
    ...
    return answer // 2
}
```

-   Terminale `node case_2.js` yazarak kodunuzu test edebilirsiniz.

```zsh
% node case_2.js

Case 1 [0 == 2]: FAIL
Case 2 [0 == 1]: FAIL
Case 3 [0 == 1]: FAIL
Case 4 [0 == 3]: FAIL
Case 5 [0 == 2]: FAIL
Case 6 [0 == 2]: FAIL
Case 7 [0 == 1]: FAIL
Case 8 [0 == 1]: FAIL
Case 9 [0 == 1]: FAIL
Case 10 [0 == 1]: FAIL
Case 11 [0 == 2]: FAIL
Case 12 [0 == 0]: FAIL
Case 13 [0 == 2]: FAIL
Case 14 [0 == 3]: FAIL
Case 15 [0 == 4]: FAIL
Case 16 [0 == 2]: FAIL
Case 17 [0 == 2]: FAIL
Case 18 [0 == 1]: FAIL
Case 19 [0 == 4]: FAIL
Case 20 [0 == 7]: FAIL
Case 21 [0 == 14]: FAIL
Case 22 [0 == 1]: FAIL
```
