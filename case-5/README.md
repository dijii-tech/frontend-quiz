### Case 5

Sadece `(`, `)`, `{`, `}`, `[` ve `]` karakterlerini içeren bir dize verildiğinde, girdinin geçerli olup olmadığını belirleyin.

Bir girdinin geçerli olması için:

1. Açık parantezler aynı türdeki parantezlerle kapatılmalıdır.
2. Açık parantezler doğru sırada kapatılmalıdır.
3. Her kapalı parantezin aynı türde bir açık parantezi olmalıdır.

#### Örnek 1:

-   Girdi: `s = "()"`,
-   Çıktı: `true`

#### Örnek 2:

-   Girdi: `s = "()[]{}"`,
-   Çıktı: `true`

#### Örnek 3:

-   Girdi: `s = "(]"`,
-   Çıktı: `false`

#### Örnek 4:

-   Girdi: `s = "{[()()]}"`,
-   Çıktı: `true`

#### Örnek 5:

-   Girdi: `s = "{[(])}"`,
-   Çıktı: `false`

#### Örnek 6:

-   Girdi: `s = "([)]"`,
-   Çıktı: `false`

#### Kısıtlamalar:

-   `1 <= s.length <= 10^4`
-   `s` sadece `()[]{}` parantezlerinden oluşur.

#### Fonksiyon Tanımı:

```javascript
function isValid(s) {
    // Fonksiyonunuzu burada yazın
}
```
