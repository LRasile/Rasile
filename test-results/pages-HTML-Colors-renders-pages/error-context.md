# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pages.spec.ts >> HTML Colors renders
- Location: tests\pages.spec.ts:67:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('.colorTableCard')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.colorTableCard')
    8 × locator resolved to <div class="colorTableCard card">…</div>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]: DEBUG MODE
    - navigation [ref=e4]:
      - generic [ref=e5] [cursor=pointer]: Rasile Consulting
      - generic [ref=e6]:
        - generic [ref=e7] [cursor=pointer]: Home
        - generic [ref=e8] [cursor=pointer]: Services
        - generic [ref=e9] [cursor=pointer]: About
        - generic [ref=e10] [cursor=pointer]: Projects
        - generic [ref=e11] [cursor=pointer]: Prototypes
      - button "Toggle theme" [ref=e13] [cursor=pointer]:
        - img [ref=e14]
    - link "Buy me a coffee" [ref=e16] [cursor=pointer]:
      - /url: https://www.buymeacoffee.com/rasile
      - img "Buy me a coffee" [ref=e17]
    - generic [ref=e19]:
      - main [ref=e20]:
        - table [ref=e23]:
          - rowgroup [ref=e24]:
            - row "Name Hex Red Green Blue" [ref=e25]:
              - columnheader "Name" [ref=e26] [cursor=pointer]
              - columnheader "Hex" [ref=e27] [cursor=pointer]
              - columnheader "Red" [ref=e28] [cursor=pointer]
              - columnheader "Green" [ref=e29] [cursor=pointer]
              - columnheader "Blue" [ref=e30] [cursor=pointer]
              - columnheader [ref=e31]
          - rowgroup [ref=e32]:
            - 'row "aliceblue #f0f8ff Copy #f0f8ff 240 248 255" [ref=e33]':
              - cell "aliceblue" [ref=e34]
              - 'cell "#f0f8ff Copy #f0f8ff" [ref=e35]':
                - generic [ref=e36]: "#f0f8ff"
                - 'button "Copy #f0f8ff" [ref=e37] [cursor=pointer]': ⧉
              - cell "240" [ref=e38]
              - cell "248" [ref=e39]
              - cell "255" [ref=e40]
              - cell [ref=e41]
            - 'row "antiquewhite #faebd7 Copy #faebd7 250 235 215" [ref=e43]':
              - cell "antiquewhite" [ref=e44]
              - 'cell "#faebd7 Copy #faebd7" [ref=e45]':
                - generic [ref=e46]: "#faebd7"
                - 'button "Copy #faebd7" [ref=e47] [cursor=pointer]': ⧉
              - cell "250" [ref=e48]
              - cell "235" [ref=e49]
              - cell "215" [ref=e50]
              - cell [ref=e51]
            - 'row "aqua #00ffff Copy #00ffff 0 255 255" [ref=e53]':
              - cell "aqua" [ref=e54]
              - 'cell "#00ffff Copy #00ffff" [ref=e55]':
                - generic [ref=e56]: "#00ffff"
                - 'button "Copy #00ffff" [ref=e57] [cursor=pointer]': ⧉
              - cell "0" [ref=e58]
              - cell "255" [ref=e59]
              - cell "255" [ref=e60]
              - cell [ref=e61]
            - 'row "aquamarine #7fffd4 Copy #7fffd4 127 255 212" [ref=e63]':
              - cell "aquamarine" [ref=e64]
              - 'cell "#7fffd4 Copy #7fffd4" [ref=e65]':
                - generic [ref=e66]: "#7fffd4"
                - 'button "Copy #7fffd4" [ref=e67] [cursor=pointer]': ⧉
              - cell "127" [ref=e68]
              - cell "255" [ref=e69]
              - cell "212" [ref=e70]
              - cell [ref=e71]
            - 'row "azure #f0ffff Copy #f0ffff 240 255 255" [ref=e73]':
              - cell "azure" [ref=e74]
              - 'cell "#f0ffff Copy #f0ffff" [ref=e75]':
                - generic [ref=e76]: "#f0ffff"
                - 'button "Copy #f0ffff" [ref=e77] [cursor=pointer]': ⧉
              - cell "240" [ref=e78]
              - cell "255" [ref=e79]
              - cell "255" [ref=e80]
              - cell [ref=e81]
            - 'row "beige #f5f5dc Copy #f5f5dc 245 245 220" [ref=e83]':
              - cell "beige" [ref=e84]
              - 'cell "#f5f5dc Copy #f5f5dc" [ref=e85]':
                - generic [ref=e86]: "#f5f5dc"
                - 'button "Copy #f5f5dc" [ref=e87] [cursor=pointer]': ⧉
              - cell "245" [ref=e88]
              - cell "245" [ref=e89]
              - cell "220" [ref=e90]
              - cell [ref=e91]
            - 'row "bisque #ffe4c4 Copy #ffe4c4 255 228 196" [ref=e93]':
              - cell "bisque" [ref=e94]
              - 'cell "#ffe4c4 Copy #ffe4c4" [ref=e95]':
                - generic [ref=e96]: "#ffe4c4"
                - 'button "Copy #ffe4c4" [ref=e97] [cursor=pointer]': ⧉
              - cell "255" [ref=e98]
              - cell "228" [ref=e99]
              - cell "196" [ref=e100]
              - cell [ref=e101]
            - 'row "black #000000 Copy #000000 0 0 0" [ref=e103]':
              - cell "black" [ref=e104]
              - 'cell "#000000 Copy #000000" [ref=e105]':
                - generic [ref=e106]: "#000000"
                - 'button "Copy #000000" [ref=e107] [cursor=pointer]': ⧉
              - cell "0" [ref=e108]
              - cell "0" [ref=e109]
              - cell "0" [ref=e110]
              - cell [ref=e111]
            - 'row "blanchedalmond #ffebcd Copy #ffebcd 255 235 205" [ref=e113]':
              - cell "blanchedalmond" [ref=e114]
              - 'cell "#ffebcd Copy #ffebcd" [ref=e115]':
                - generic [ref=e116]: "#ffebcd"
                - 'button "Copy #ffebcd" [ref=e117] [cursor=pointer]': ⧉
              - cell "255" [ref=e118]
              - cell "235" [ref=e119]
              - cell "205" [ref=e120]
              - cell [ref=e121]
            - 'row "blue #0000ff Copy #0000ff 0 0 255" [ref=e123]':
              - cell "blue" [ref=e124]
              - 'cell "#0000ff Copy #0000ff" [ref=e125]':
                - generic [ref=e126]: "#0000ff"
                - 'button "Copy #0000ff" [ref=e127] [cursor=pointer]': ⧉
              - cell "0" [ref=e128]
              - cell "0" [ref=e129]
              - cell "255" [ref=e130]
              - cell [ref=e131]
            - 'row "blueviolet #8a2be2 Copy #8a2be2 138 43 226" [ref=e133]':
              - cell "blueviolet" [ref=e134]
              - 'cell "#8a2be2 Copy #8a2be2" [ref=e135]':
                - generic [ref=e136]: "#8a2be2"
                - 'button "Copy #8a2be2" [ref=e137] [cursor=pointer]': ⧉
              - cell "138" [ref=e138]
              - cell "43" [ref=e139]
              - cell "226" [ref=e140]
              - cell [ref=e141]
            - 'row "brown #a52a2a Copy #a52a2a 165 42 42" [ref=e143]':
              - cell "brown" [ref=e144]
              - 'cell "#a52a2a Copy #a52a2a" [ref=e145]':
                - generic [ref=e146]: "#a52a2a"
                - 'button "Copy #a52a2a" [ref=e147] [cursor=pointer]': ⧉
              - cell "165" [ref=e148]
              - cell "42" [ref=e149]
              - cell "42" [ref=e150]
              - cell [ref=e151]
            - 'row "burlywood #deb887 Copy #deb887 222 184 135" [ref=e153]':
              - cell "burlywood" [ref=e154]
              - 'cell "#deb887 Copy #deb887" [ref=e155]':
                - generic [ref=e156]: "#deb887"
                - 'button "Copy #deb887" [ref=e157] [cursor=pointer]': ⧉
              - cell "222" [ref=e158]
              - cell "184" [ref=e159]
              - cell "135" [ref=e160]
              - cell [ref=e161]
            - 'row "cadetblue #5f9ea0 Copy #5f9ea0 95 158 160" [ref=e163]':
              - cell "cadetblue" [ref=e164]
              - 'cell "#5f9ea0 Copy #5f9ea0" [ref=e165]':
                - generic [ref=e166]: "#5f9ea0"
                - 'button "Copy #5f9ea0" [ref=e167] [cursor=pointer]': ⧉
              - cell "95" [ref=e168]
              - cell "158" [ref=e169]
              - cell "160" [ref=e170]
              - cell [ref=e171]
            - 'row "chartreuse #7fff00 Copy #7fff00 127 255 0" [ref=e173]':
              - cell "chartreuse" [ref=e174]
              - 'cell "#7fff00 Copy #7fff00" [ref=e175]':
                - generic [ref=e176]: "#7fff00"
                - 'button "Copy #7fff00" [ref=e177] [cursor=pointer]': ⧉
              - cell "127" [ref=e178]
              - cell "255" [ref=e179]
              - cell "0" [ref=e180]
              - cell [ref=e181]
            - 'row "chocolate #d2691e Copy #d2691e 210 105 30" [ref=e183]':
              - cell "chocolate" [ref=e184]
              - 'cell "#d2691e Copy #d2691e" [ref=e185]':
                - generic [ref=e186]: "#d2691e"
                - 'button "Copy #d2691e" [ref=e187] [cursor=pointer]': ⧉
              - cell "210" [ref=e188]
              - cell "105" [ref=e189]
              - cell "30" [ref=e190]
              - cell [ref=e191]
            - 'row "coral #ff7f50 Copy #ff7f50 255 127 80" [ref=e193]':
              - cell "coral" [ref=e194]
              - 'cell "#ff7f50 Copy #ff7f50" [ref=e195]':
                - generic [ref=e196]: "#ff7f50"
                - 'button "Copy #ff7f50" [ref=e197] [cursor=pointer]': ⧉
              - cell "255" [ref=e198]
              - cell "127" [ref=e199]
              - cell "80" [ref=e200]
              - cell [ref=e201]
            - 'row "cornflowerblue #6495ed Copy #6495ed 100 149 237" [ref=e203]':
              - cell "cornflowerblue" [ref=e204]
              - 'cell "#6495ed Copy #6495ed" [ref=e205]':
                - generic [ref=e206]: "#6495ed"
                - 'button "Copy #6495ed" [ref=e207] [cursor=pointer]': ⧉
              - cell "100" [ref=e208]
              - cell "149" [ref=e209]
              - cell "237" [ref=e210]
              - cell [ref=e211]
            - 'row "cornsilk #fff8dc Copy #fff8dc 255 248 220" [ref=e213]':
              - cell "cornsilk" [ref=e214]
              - 'cell "#fff8dc Copy #fff8dc" [ref=e215]':
                - generic [ref=e216]: "#fff8dc"
                - 'button "Copy #fff8dc" [ref=e217] [cursor=pointer]': ⧉
              - cell "255" [ref=e218]
              - cell "248" [ref=e219]
              - cell "220" [ref=e220]
              - cell [ref=e221]
            - 'row "crimson #dc143c Copy #dc143c 220 20 60" [ref=e223]':
              - cell "crimson" [ref=e224]
              - 'cell "#dc143c Copy #dc143c" [ref=e225]':
                - generic [ref=e226]: "#dc143c"
                - 'button "Copy #dc143c" [ref=e227] [cursor=pointer]': ⧉
              - cell "220" [ref=e228]
              - cell "20" [ref=e229]
              - cell "60" [ref=e230]
              - cell [ref=e231]
            - 'row "cyan #00ffff Copy #00ffff 0 255 255" [ref=e233]':
              - cell "cyan" [ref=e234]
              - 'cell "#00ffff Copy #00ffff" [ref=e235]':
                - generic [ref=e236]: "#00ffff"
                - 'button "Copy #00ffff" [ref=e237] [cursor=pointer]': ⧉
              - cell "0" [ref=e238]
              - cell "255" [ref=e239]
              - cell "255" [ref=e240]
              - cell [ref=e241]
            - 'row "darkblue #00008b Copy #00008b 0 0 139" [ref=e243]':
              - cell "darkblue" [ref=e244]
              - 'cell "#00008b Copy #00008b" [ref=e245]':
                - generic [ref=e246]: "#00008b"
                - 'button "Copy #00008b" [ref=e247] [cursor=pointer]': ⧉
              - cell "0" [ref=e248]
              - cell "0" [ref=e249]
              - cell "139" [ref=e250]
              - cell [ref=e251]
            - 'row "darkcyan #008b8b Copy #008b8b 0 139 139" [ref=e253]':
              - cell "darkcyan" [ref=e254]
              - 'cell "#008b8b Copy #008b8b" [ref=e255]':
                - generic [ref=e256]: "#008b8b"
                - 'button "Copy #008b8b" [ref=e257] [cursor=pointer]': ⧉
              - cell "0" [ref=e258]
              - cell "139" [ref=e259]
              - cell "139" [ref=e260]
              - cell [ref=e261]
            - 'row "darkgoldenrod #b8860b Copy #b8860b 184 134 11" [ref=e263]':
              - cell "darkgoldenrod" [ref=e264]
              - 'cell "#b8860b Copy #b8860b" [ref=e265]':
                - generic [ref=e266]: "#b8860b"
                - 'button "Copy #b8860b" [ref=e267] [cursor=pointer]': ⧉
              - cell "184" [ref=e268]
              - cell "134" [ref=e269]
              - cell "11" [ref=e270]
              - cell [ref=e271]
            - 'row "darkgray #a9a9a9 Copy #a9a9a9 169 169 169" [ref=e273]':
              - cell "darkgray" [ref=e274]
              - 'cell "#a9a9a9 Copy #a9a9a9" [ref=e275]':
                - generic [ref=e276]: "#a9a9a9"
                - 'button "Copy #a9a9a9" [ref=e277] [cursor=pointer]': ⧉
              - cell "169" [ref=e278]
              - cell "169" [ref=e279]
              - cell "169" [ref=e280]
              - cell [ref=e281]
            - 'row "darkgreen #006400 Copy #006400 0 100 0" [ref=e283]':
              - cell "darkgreen" [ref=e284]
              - 'cell "#006400 Copy #006400" [ref=e285]':
                - generic [ref=e286]: "#006400"
                - 'button "Copy #006400" [ref=e287] [cursor=pointer]': ⧉
              - cell "0" [ref=e288]
              - cell "100" [ref=e289]
              - cell "0" [ref=e290]
              - cell [ref=e291]
            - 'row "darkgrey #a9a9a9 Copy #a9a9a9 169 169 169" [ref=e293]':
              - cell "darkgrey" [ref=e294]
              - 'cell "#a9a9a9 Copy #a9a9a9" [ref=e295]':
                - generic [ref=e296]: "#a9a9a9"
                - 'button "Copy #a9a9a9" [ref=e297] [cursor=pointer]': ⧉
              - cell "169" [ref=e298]
              - cell "169" [ref=e299]
              - cell "169" [ref=e300]
              - cell [ref=e301]
            - 'row "darkkhaki #bdb76b Copy #bdb76b 189 183 107" [ref=e303]':
              - cell "darkkhaki" [ref=e304]
              - 'cell "#bdb76b Copy #bdb76b" [ref=e305]':
                - generic [ref=e306]: "#bdb76b"
                - 'button "Copy #bdb76b" [ref=e307] [cursor=pointer]': ⧉
              - cell "189" [ref=e308]
              - cell "183" [ref=e309]
              - cell "107" [ref=e310]
              - cell [ref=e311]
            - 'row "darkmagenta #8b008b Copy #8b008b 139 0 139" [ref=e313]':
              - cell "darkmagenta" [ref=e314]
              - 'cell "#8b008b Copy #8b008b" [ref=e315]':
                - generic [ref=e316]: "#8b008b"
                - 'button "Copy #8b008b" [ref=e317] [cursor=pointer]': ⧉
              - cell "139" [ref=e318]
              - cell "0" [ref=e319]
              - cell "139" [ref=e320]
              - cell [ref=e321]
            - 'row "darkolivegreen #556b2f Copy #556b2f 85 107 47" [ref=e323]':
              - cell "darkolivegreen" [ref=e324]
              - 'cell "#556b2f Copy #556b2f" [ref=e325]':
                - generic [ref=e326]: "#556b2f"
                - 'button "Copy #556b2f" [ref=e327] [cursor=pointer]': ⧉
              - cell "85" [ref=e328]
              - cell "107" [ref=e329]
              - cell "47" [ref=e330]
              - cell [ref=e331]
            - 'row "darkorange #ff8c00 Copy #ff8c00 255 140 0" [ref=e333]':
              - cell "darkorange" [ref=e334]
              - 'cell "#ff8c00 Copy #ff8c00" [ref=e335]':
                - generic [ref=e336]: "#ff8c00"
                - 'button "Copy #ff8c00" [ref=e337] [cursor=pointer]': ⧉
              - cell "255" [ref=e338]
              - cell "140" [ref=e339]
              - cell "0" [ref=e340]
              - cell [ref=e341]
            - 'row "darkorchid #9932cc Copy #9932cc 153 50 204" [ref=e343]':
              - cell "darkorchid" [ref=e344]
              - 'cell "#9932cc Copy #9932cc" [ref=e345]':
                - generic [ref=e346]: "#9932cc"
                - 'button "Copy #9932cc" [ref=e347] [cursor=pointer]': ⧉
              - cell "153" [ref=e348]
              - cell "50" [ref=e349]
              - cell "204" [ref=e350]
              - cell [ref=e351]
            - 'row "darkred #8b0000 Copy #8b0000 139 0 0" [ref=e353]':
              - cell "darkred" [ref=e354]
              - 'cell "#8b0000 Copy #8b0000" [ref=e355]':
                - generic [ref=e356]: "#8b0000"
                - 'button "Copy #8b0000" [ref=e357] [cursor=pointer]': ⧉
              - cell "139" [ref=e358]
              - cell "0" [ref=e359]
              - cell "0" [ref=e360]
              - cell [ref=e361]
            - 'row "darksalmon #e9967a Copy #e9967a 233 150 122" [ref=e363]':
              - cell "darksalmon" [ref=e364]
              - 'cell "#e9967a Copy #e9967a" [ref=e365]':
                - generic [ref=e366]: "#e9967a"
                - 'button "Copy #e9967a" [ref=e367] [cursor=pointer]': ⧉
              - cell "233" [ref=e368]
              - cell "150" [ref=e369]
              - cell "122" [ref=e370]
              - cell [ref=e371]
            - 'row "darkseagreen #8fbc8f Copy #8fbc8f 143 188 143" [ref=e373]':
              - cell "darkseagreen" [ref=e374]
              - 'cell "#8fbc8f Copy #8fbc8f" [ref=e375]':
                - generic [ref=e376]: "#8fbc8f"
                - 'button "Copy #8fbc8f" [ref=e377] [cursor=pointer]': ⧉
              - cell "143" [ref=e378]
              - cell "188" [ref=e379]
              - cell "143" [ref=e380]
              - cell [ref=e381]
            - 'row "darkslateblue #483d8b Copy #483d8b 72 61 139" [ref=e383]':
              - cell "darkslateblue" [ref=e384]
              - 'cell "#483d8b Copy #483d8b" [ref=e385]':
                - generic [ref=e386]: "#483d8b"
                - 'button "Copy #483d8b" [ref=e387] [cursor=pointer]': ⧉
              - cell "72" [ref=e388]
              - cell "61" [ref=e389]
              - cell "139" [ref=e390]
              - cell [ref=e391]
            - 'row "darkslategray #2f4f4f Copy #2f4f4f 47 79 79" [ref=e393]':
              - cell "darkslategray" [ref=e394]
              - 'cell "#2f4f4f Copy #2f4f4f" [ref=e395]':
                - generic [ref=e396]: "#2f4f4f"
                - 'button "Copy #2f4f4f" [ref=e397] [cursor=pointer]': ⧉
              - cell "47" [ref=e398]
              - cell "79" [ref=e399]
              - cell "79" [ref=e400]
              - cell [ref=e401]
            - 'row "darkslategrey #2f4f4f Copy #2f4f4f 47 79 79" [ref=e403]':
              - cell "darkslategrey" [ref=e404]
              - 'cell "#2f4f4f Copy #2f4f4f" [ref=e405]':
                - generic [ref=e406]: "#2f4f4f"
                - 'button "Copy #2f4f4f" [ref=e407] [cursor=pointer]': ⧉
              - cell "47" [ref=e408]
              - cell "79" [ref=e409]
              - cell "79" [ref=e410]
              - cell [ref=e411]
            - 'row "darkturquoise #00ced1 Copy #00ced1 0 206 209" [ref=e413]':
              - cell "darkturquoise" [ref=e414]
              - 'cell "#00ced1 Copy #00ced1" [ref=e415]':
                - generic [ref=e416]: "#00ced1"
                - 'button "Copy #00ced1" [ref=e417] [cursor=pointer]': ⧉
              - cell "0" [ref=e418]
              - cell "206" [ref=e419]
              - cell "209" [ref=e420]
              - cell [ref=e421]
            - 'row "darkviolet #9400d3 Copy #9400d3 148 0 211" [ref=e423]':
              - cell "darkviolet" [ref=e424]
              - 'cell "#9400d3 Copy #9400d3" [ref=e425]':
                - generic [ref=e426]: "#9400d3"
                - 'button "Copy #9400d3" [ref=e427] [cursor=pointer]': ⧉
              - cell "148" [ref=e428]
              - cell "0" [ref=e429]
              - cell "211" [ref=e430]
              - cell [ref=e431]
            - 'row "deeppink #ff1493 Copy #ff1493 255 20 147" [ref=e433]':
              - cell "deeppink" [ref=e434]
              - 'cell "#ff1493 Copy #ff1493" [ref=e435]':
                - generic [ref=e436]: "#ff1493"
                - 'button "Copy #ff1493" [ref=e437] [cursor=pointer]': ⧉
              - cell "255" [ref=e438]
              - cell "20" [ref=e439]
              - cell "147" [ref=e440]
              - cell [ref=e441]
            - 'row "deepskyblue #00bfff Copy #00bfff 0 191 255" [ref=e443]':
              - cell "deepskyblue" [ref=e444]
              - 'cell "#00bfff Copy #00bfff" [ref=e445]':
                - generic [ref=e446]: "#00bfff"
                - 'button "Copy #00bfff" [ref=e447] [cursor=pointer]': ⧉
              - cell "0" [ref=e448]
              - cell "191" [ref=e449]
              - cell "255" [ref=e450]
              - cell [ref=e451]
            - 'row "dimgray #696969 Copy #696969 105 105 105" [ref=e453]':
              - cell "dimgray" [ref=e454]
              - 'cell "#696969 Copy #696969" [ref=e455]':
                - generic [ref=e456]: "#696969"
                - 'button "Copy #696969" [ref=e457] [cursor=pointer]': ⧉
              - cell "105" [ref=e458]
              - cell "105" [ref=e459]
              - cell "105" [ref=e460]
              - cell [ref=e461]
            - 'row "dimgrey #696969 Copy #696969 105 105 105" [ref=e463]':
              - cell "dimgrey" [ref=e464]
              - 'cell "#696969 Copy #696969" [ref=e465]':
                - generic [ref=e466]: "#696969"
                - 'button "Copy #696969" [ref=e467] [cursor=pointer]': ⧉
              - cell "105" [ref=e468]
              - cell "105" [ref=e469]
              - cell "105" [ref=e470]
              - cell [ref=e471]
            - 'row "dodgerblue #1e90ff Copy #1e90ff 30 144 255" [ref=e473]':
              - cell "dodgerblue" [ref=e474]
              - 'cell "#1e90ff Copy #1e90ff" [ref=e475]':
                - generic [ref=e476]: "#1e90ff"
                - 'button "Copy #1e90ff" [ref=e477] [cursor=pointer]': ⧉
              - cell "30" [ref=e478]
              - cell "144" [ref=e479]
              - cell "255" [ref=e480]
              - cell [ref=e481]
            - 'row "firebrick #b22222 Copy #b22222 178 34 34" [ref=e483]':
              - cell "firebrick" [ref=e484]
              - 'cell "#b22222 Copy #b22222" [ref=e485]':
                - generic [ref=e486]: "#b22222"
                - 'button "Copy #b22222" [ref=e487] [cursor=pointer]': ⧉
              - cell "178" [ref=e488]
              - cell "34" [ref=e489]
              - cell "34" [ref=e490]
              - cell [ref=e491]
            - 'row "floralwhite #fffaf0 Copy #fffaf0 255 250 240" [ref=e493]':
              - cell "floralwhite" [ref=e494]
              - 'cell "#fffaf0 Copy #fffaf0" [ref=e495]':
                - generic [ref=e496]: "#fffaf0"
                - 'button "Copy #fffaf0" [ref=e497] [cursor=pointer]': ⧉
              - cell "255" [ref=e498]
              - cell "250" [ref=e499]
              - cell "240" [ref=e500]
              - cell [ref=e501]
            - 'row "forestgreen #228b22 Copy #228b22 34 139 34" [ref=e503]':
              - cell "forestgreen" [ref=e504]
              - 'cell "#228b22 Copy #228b22" [ref=e505]':
                - generic [ref=e506]: "#228b22"
                - 'button "Copy #228b22" [ref=e507] [cursor=pointer]': ⧉
              - cell "34" [ref=e508]
              - cell "139" [ref=e509]
              - cell "34" [ref=e510]
              - cell [ref=e511]
            - 'row "fuchsia #ff00ff Copy #ff00ff 255 0 255" [ref=e513]':
              - cell "fuchsia" [ref=e514]
              - 'cell "#ff00ff Copy #ff00ff" [ref=e515]':
                - generic [ref=e516]: "#ff00ff"
                - 'button "Copy #ff00ff" [ref=e517] [cursor=pointer]': ⧉
              - cell "255" [ref=e518]
              - cell "0" [ref=e519]
              - cell "255" [ref=e520]
              - cell [ref=e521]
            - 'row "gainsboro #dcdcdc Copy #dcdcdc 220 220 220" [ref=e523]':
              - cell "gainsboro" [ref=e524]
              - 'cell "#dcdcdc Copy #dcdcdc" [ref=e525]':
                - generic [ref=e526]: "#dcdcdc"
                - 'button "Copy #dcdcdc" [ref=e527] [cursor=pointer]': ⧉
              - cell "220" [ref=e528]
              - cell "220" [ref=e529]
              - cell "220" [ref=e530]
              - cell [ref=e531]
            - 'row "ghostwhite #f8f8ff Copy #f8f8ff 248 248 255" [ref=e533]':
              - cell "ghostwhite" [ref=e534]
              - 'cell "#f8f8ff Copy #f8f8ff" [ref=e535]':
                - generic [ref=e536]: "#f8f8ff"
                - 'button "Copy #f8f8ff" [ref=e537] [cursor=pointer]': ⧉
              - cell "248" [ref=e538]
              - cell "248" [ref=e539]
              - cell "255" [ref=e540]
              - cell [ref=e541]
            - 'row "gold #ffd700 Copy #ffd700 255 215 0" [ref=e543]':
              - cell "gold" [ref=e544]
              - 'cell "#ffd700 Copy #ffd700" [ref=e545]':
                - generic [ref=e546]: "#ffd700"
                - 'button "Copy #ffd700" [ref=e547] [cursor=pointer]': ⧉
              - cell "255" [ref=e548]
              - cell "215" [ref=e549]
              - cell "0" [ref=e550]
              - cell [ref=e551]
            - 'row "goldenrod #daa520 Copy #daa520 218 165 32" [ref=e553]':
              - cell "goldenrod" [ref=e554]
              - 'cell "#daa520 Copy #daa520" [ref=e555]':
                - generic [ref=e556]: "#daa520"
                - 'button "Copy #daa520" [ref=e557] [cursor=pointer]': ⧉
              - cell "218" [ref=e558]
              - cell "165" [ref=e559]
              - cell "32" [ref=e560]
              - cell [ref=e561]
            - 'row "gray #808080 Copy #808080 128 128 128" [ref=e563]':
              - cell "gray" [ref=e564]
              - 'cell "#808080 Copy #808080" [ref=e565]':
                - generic [ref=e566]: "#808080"
                - 'button "Copy #808080" [ref=e567] [cursor=pointer]': ⧉
              - cell "128" [ref=e568]
              - cell "128" [ref=e569]
              - cell "128" [ref=e570]
              - cell [ref=e571]
            - 'row "green #008000 Copy #008000 0 128 0" [ref=e573]':
              - cell "green" [ref=e574]
              - 'cell "#008000 Copy #008000" [ref=e575]':
                - generic [ref=e576]: "#008000"
                - 'button "Copy #008000" [ref=e577] [cursor=pointer]': ⧉
              - cell "0" [ref=e578]
              - cell "128" [ref=e579]
              - cell "0" [ref=e580]
              - cell [ref=e581]
            - 'row "greenyellow #adff2f Copy #adff2f 173 255 47" [ref=e583]':
              - cell "greenyellow" [ref=e584]
              - 'cell "#adff2f Copy #adff2f" [ref=e585]':
                - generic [ref=e586]: "#adff2f"
                - 'button "Copy #adff2f" [ref=e587] [cursor=pointer]': ⧉
              - cell "173" [ref=e588]
              - cell "255" [ref=e589]
              - cell "47" [ref=e590]
              - cell [ref=e591]
            - 'row "grey #808080 Copy #808080 128 128 128" [ref=e593]':
              - cell "grey" [ref=e594]
              - 'cell "#808080 Copy #808080" [ref=e595]':
                - generic [ref=e596]: "#808080"
                - 'button "Copy #808080" [ref=e597] [cursor=pointer]': ⧉
              - cell "128" [ref=e598]
              - cell "128" [ref=e599]
              - cell "128" [ref=e600]
              - cell [ref=e601]
            - 'row "honeydew #f0fff0 Copy #f0fff0 240 255 240" [ref=e603]':
              - cell "honeydew" [ref=e604]
              - 'cell "#f0fff0 Copy #f0fff0" [ref=e605]':
                - generic [ref=e606]: "#f0fff0"
                - 'button "Copy #f0fff0" [ref=e607] [cursor=pointer]': ⧉
              - cell "240" [ref=e608]
              - cell "255" [ref=e609]
              - cell "240" [ref=e610]
              - cell [ref=e611]
            - 'row "hotpink #ff69b4 Copy #ff69b4 255 105 180" [ref=e613]':
              - cell "hotpink" [ref=e614]
              - 'cell "#ff69b4 Copy #ff69b4" [ref=e615]':
                - generic [ref=e616]: "#ff69b4"
                - 'button "Copy #ff69b4" [ref=e617] [cursor=pointer]': ⧉
              - cell "255" [ref=e618]
              - cell "105" [ref=e619]
              - cell "180" [ref=e620]
              - cell [ref=e621]
            - 'row "indianred #cd5c5c Copy #cd5c5c 205 92 92" [ref=e623]':
              - cell "indianred" [ref=e624]
              - 'cell "#cd5c5c Copy #cd5c5c" [ref=e625]':
                - generic [ref=e626]: "#cd5c5c"
                - 'button "Copy #cd5c5c" [ref=e627] [cursor=pointer]': ⧉
              - cell "205" [ref=e628]
              - cell "92" [ref=e629]
              - cell "92" [ref=e630]
              - cell [ref=e631]
            - 'row "indigo #4b0082 Copy #4b0082 75 0 130" [ref=e633]':
              - cell "indigo" [ref=e634]
              - 'cell "#4b0082 Copy #4b0082" [ref=e635]':
                - generic [ref=e636]: "#4b0082"
                - 'button "Copy #4b0082" [ref=e637] [cursor=pointer]': ⧉
              - cell "75" [ref=e638]
              - cell "0" [ref=e639]
              - cell "130" [ref=e640]
              - cell [ref=e641]
            - 'row "ivory #fffff0 Copy #fffff0 255 255 240" [ref=e643]':
              - cell "ivory" [ref=e644]
              - 'cell "#fffff0 Copy #fffff0" [ref=e645]':
                - generic [ref=e646]: "#fffff0"
                - 'button "Copy #fffff0" [ref=e647] [cursor=pointer]': ⧉
              - cell "255" [ref=e648]
              - cell "255" [ref=e649]
              - cell "240" [ref=e650]
              - cell [ref=e651]
            - 'row "khaki #f0e68c Copy #f0e68c 240 230 140" [ref=e653]':
              - cell "khaki" [ref=e654]
              - 'cell "#f0e68c Copy #f0e68c" [ref=e655]':
                - generic [ref=e656]: "#f0e68c"
                - 'button "Copy #f0e68c" [ref=e657] [cursor=pointer]': ⧉
              - cell "240" [ref=e658]
              - cell "230" [ref=e659]
              - cell "140" [ref=e660]
              - cell [ref=e661]
            - 'row "lavender #e6e6fa Copy #e6e6fa 230 230 250" [ref=e663]':
              - cell "lavender" [ref=e664]
              - 'cell "#e6e6fa Copy #e6e6fa" [ref=e665]':
                - generic [ref=e666]: "#e6e6fa"
                - 'button "Copy #e6e6fa" [ref=e667] [cursor=pointer]': ⧉
              - cell "230" [ref=e668]
              - cell "230" [ref=e669]
              - cell "250" [ref=e670]
              - cell [ref=e671]
            - 'row "lavenderblush #fff0f5 Copy #fff0f5 255 240 245" [ref=e673]':
              - cell "lavenderblush" [ref=e674]
              - 'cell "#fff0f5 Copy #fff0f5" [ref=e675]':
                - generic [ref=e676]: "#fff0f5"
                - 'button "Copy #fff0f5" [ref=e677] [cursor=pointer]': ⧉
              - cell "255" [ref=e678]
              - cell "240" [ref=e679]
              - cell "245" [ref=e680]
              - cell [ref=e681]
            - 'row "lawngreen #7cfc00 Copy #7cfc00 124 252 0" [ref=e683]':
              - cell "lawngreen" [ref=e684]
              - 'cell "#7cfc00 Copy #7cfc00" [ref=e685]':
                - generic [ref=e686]: "#7cfc00"
                - 'button "Copy #7cfc00" [ref=e687] [cursor=pointer]': ⧉
              - cell "124" [ref=e688]
              - cell "252" [ref=e689]
              - cell "0" [ref=e690]
              - cell [ref=e691]
            - 'row "lemonchiffon #fffacd Copy #fffacd 255 250 205" [ref=e693]':
              - cell "lemonchiffon" [ref=e694]
              - 'cell "#fffacd Copy #fffacd" [ref=e695]':
                - generic [ref=e696]: "#fffacd"
                - 'button "Copy #fffacd" [ref=e697] [cursor=pointer]': ⧉
              - cell "255" [ref=e698]
              - cell "250" [ref=e699]
              - cell "205" [ref=e700]
              - cell [ref=e701]
            - 'row "lightblue #add8e6 Copy #add8e6 173 216 230" [ref=e703]':
              - cell "lightblue" [ref=e704]
              - 'cell "#add8e6 Copy #add8e6" [ref=e705]':
                - generic [ref=e706]: "#add8e6"
                - 'button "Copy #add8e6" [ref=e707] [cursor=pointer]': ⧉
              - cell "173" [ref=e708]
              - cell "216" [ref=e709]
              - cell "230" [ref=e710]
              - cell [ref=e711]
            - 'row "lightcoral #f08080 Copy #f08080 240 128 128" [ref=e713]':
              - cell "lightcoral" [ref=e714]
              - 'cell "#f08080 Copy #f08080" [ref=e715]':
                - generic [ref=e716]: "#f08080"
                - 'button "Copy #f08080" [ref=e717] [cursor=pointer]': ⧉
              - cell "240" [ref=e718]
              - cell "128" [ref=e719]
              - cell "128" [ref=e720]
              - cell [ref=e721]
            - 'row "lightcyan #e0ffff Copy #e0ffff 224 255 255" [ref=e723]':
              - cell "lightcyan" [ref=e724]
              - 'cell "#e0ffff Copy #e0ffff" [ref=e725]':
                - generic [ref=e726]: "#e0ffff"
                - 'button "Copy #e0ffff" [ref=e727] [cursor=pointer]': ⧉
              - cell "224" [ref=e728]
              - cell "255" [ref=e729]
              - cell "255" [ref=e730]
              - cell [ref=e731]
            - 'row "lightgoldenrodyellow #fafad2 Copy #fafad2 250 250 210" [ref=e733]':
              - cell "lightgoldenrodyellow" [ref=e734]
              - 'cell "#fafad2 Copy #fafad2" [ref=e735]':
                - generic [ref=e736]: "#fafad2"
                - 'button "Copy #fafad2" [ref=e737] [cursor=pointer]': ⧉
              - cell "250" [ref=e738]
              - cell "250" [ref=e739]
              - cell "210" [ref=e740]
              - cell [ref=e741]
            - 'row "lightgray #d3d3d3 Copy #d3d3d3 211 211 211" [ref=e743]':
              - cell "lightgray" [ref=e744]
              - 'cell "#d3d3d3 Copy #d3d3d3" [ref=e745]':
                - generic [ref=e746]: "#d3d3d3"
                - 'button "Copy #d3d3d3" [ref=e747] [cursor=pointer]': ⧉
              - cell "211" [ref=e748]
              - cell "211" [ref=e749]
              - cell "211" [ref=e750]
              - cell [ref=e751]
            - 'row "lightgreen #90ee90 Copy #90ee90 144 238 144" [ref=e753]':
              - cell "lightgreen" [ref=e754]
              - 'cell "#90ee90 Copy #90ee90" [ref=e755]':
                - generic [ref=e756]: "#90ee90"
                - 'button "Copy #90ee90" [ref=e757] [cursor=pointer]': ⧉
              - cell "144" [ref=e758]
              - cell "238" [ref=e759]
              - cell "144" [ref=e760]
              - cell [ref=e761]
            - 'row "lightgrey #d3d3d3 Copy #d3d3d3 211 211 211" [ref=e763]':
              - cell "lightgrey" [ref=e764]
              - 'cell "#d3d3d3 Copy #d3d3d3" [ref=e765]':
                - generic [ref=e766]: "#d3d3d3"
                - 'button "Copy #d3d3d3" [ref=e767] [cursor=pointer]': ⧉
              - cell "211" [ref=e768]
              - cell "211" [ref=e769]
              - cell "211" [ref=e770]
              - cell [ref=e771]
            - 'row "lightpink #ffb6c1 Copy #ffb6c1 255 182 193" [ref=e773]':
              - cell "lightpink" [ref=e774]
              - 'cell "#ffb6c1 Copy #ffb6c1" [ref=e775]':
                - generic [ref=e776]: "#ffb6c1"
                - 'button "Copy #ffb6c1" [ref=e777] [cursor=pointer]': ⧉
              - cell "255" [ref=e778]
              - cell "182" [ref=e779]
              - cell "193" [ref=e780]
              - cell [ref=e781]
            - 'row "lightsalmon #ffa07a Copy #ffa07a 255 160 122" [ref=e783]':
              - cell "lightsalmon" [ref=e784]
              - 'cell "#ffa07a Copy #ffa07a" [ref=e785]':
                - generic [ref=e786]: "#ffa07a"
                - 'button "Copy #ffa07a" [ref=e787] [cursor=pointer]': ⧉
              - cell "255" [ref=e788]
              - cell "160" [ref=e789]
              - cell "122" [ref=e790]
              - cell [ref=e791]
            - 'row "lightseagreen #20b2aa Copy #20b2aa 32 178 170" [ref=e793]':
              - cell "lightseagreen" [ref=e794]
              - 'cell "#20b2aa Copy #20b2aa" [ref=e795]':
                - generic [ref=e796]: "#20b2aa"
                - 'button "Copy #20b2aa" [ref=e797] [cursor=pointer]': ⧉
              - cell "32" [ref=e798]
              - cell "178" [ref=e799]
              - cell "170" [ref=e800]
              - cell [ref=e801]
            - 'row "lightskyblue #87cefa Copy #87cefa 135 206 250" [ref=e803]':
              - cell "lightskyblue" [ref=e804]
              - 'cell "#87cefa Copy #87cefa" [ref=e805]':
                - generic [ref=e806]: "#87cefa"
                - 'button "Copy #87cefa" [ref=e807] [cursor=pointer]': ⧉
              - cell "135" [ref=e808]
              - cell "206" [ref=e809]
              - cell "250" [ref=e810]
              - cell [ref=e811]
            - 'row "lightslategray #778899 Copy #778899 119 136 153" [ref=e813]':
              - cell "lightslategray" [ref=e814]
              - 'cell "#778899 Copy #778899" [ref=e815]':
                - generic [ref=e816]: "#778899"
                - 'button "Copy #778899" [ref=e817] [cursor=pointer]': ⧉
              - cell "119" [ref=e818]
              - cell "136" [ref=e819]
              - cell "153" [ref=e820]
              - cell [ref=e821]
            - 'row "lightslategrey #778899 Copy #778899 119 136 153" [ref=e823]':
              - cell "lightslategrey" [ref=e824]
              - 'cell "#778899 Copy #778899" [ref=e825]':
                - generic [ref=e826]: "#778899"
                - 'button "Copy #778899" [ref=e827] [cursor=pointer]': ⧉
              - cell "119" [ref=e828]
              - cell "136" [ref=e829]
              - cell "153" [ref=e830]
              - cell [ref=e831]
            - 'row "lightsteelblue #b0c4de Copy #b0c4de 176 196 222" [ref=e833]':
              - cell "lightsteelblue" [ref=e834]
              - 'cell "#b0c4de Copy #b0c4de" [ref=e835]':
                - generic [ref=e836]: "#b0c4de"
                - 'button "Copy #b0c4de" [ref=e837] [cursor=pointer]': ⧉
              - cell "176" [ref=e838]
              - cell "196" [ref=e839]
              - cell "222" [ref=e840]
              - cell [ref=e841]
            - 'row "lightyellow #ffffe0 Copy #ffffe0 255 255 224" [ref=e843]':
              - cell "lightyellow" [ref=e844]
              - 'cell "#ffffe0 Copy #ffffe0" [ref=e845]':
                - generic [ref=e846]: "#ffffe0"
                - 'button "Copy #ffffe0" [ref=e847] [cursor=pointer]': ⧉
              - cell "255" [ref=e848]
              - cell "255" [ref=e849]
              - cell "224" [ref=e850]
              - cell [ref=e851]
            - 'row "lime #00ff00 Copy #00ff00 0 255 0" [ref=e853]':
              - cell "lime" [ref=e854]
              - 'cell "#00ff00 Copy #00ff00" [ref=e855]':
                - generic [ref=e856]: "#00ff00"
                - 'button "Copy #00ff00" [ref=e857] [cursor=pointer]': ⧉
              - cell "0" [ref=e858]
              - cell "255" [ref=e859]
              - cell "0" [ref=e860]
              - cell [ref=e861]
            - 'row "limegreen #32cd32 Copy #32cd32 50 205 50" [ref=e863]':
              - cell "limegreen" [ref=e864]
              - 'cell "#32cd32 Copy #32cd32" [ref=e865]':
                - generic [ref=e866]: "#32cd32"
                - 'button "Copy #32cd32" [ref=e867] [cursor=pointer]': ⧉
              - cell "50" [ref=e868]
              - cell "205" [ref=e869]
              - cell "50" [ref=e870]
              - cell [ref=e871]
            - 'row "linen #faf0e6 Copy #faf0e6 250 240 230" [ref=e873]':
              - cell "linen" [ref=e874]
              - 'cell "#faf0e6 Copy #faf0e6" [ref=e875]':
                - generic [ref=e876]: "#faf0e6"
                - 'button "Copy #faf0e6" [ref=e877] [cursor=pointer]': ⧉
              - cell "250" [ref=e878]
              - cell "240" [ref=e879]
              - cell "230" [ref=e880]
              - cell [ref=e881]
            - 'row "magenta #ff00ff Copy #ff00ff 255 0 255" [ref=e883]':
              - cell "magenta" [ref=e884]
              - 'cell "#ff00ff Copy #ff00ff" [ref=e885]':
                - generic [ref=e886]: "#ff00ff"
                - 'button "Copy #ff00ff" [ref=e887] [cursor=pointer]': ⧉
              - cell "255" [ref=e888]
              - cell "0" [ref=e889]
              - cell "255" [ref=e890]
              - cell [ref=e891]
            - 'row "maroon #800000 Copy #800000 128 0 0" [ref=e893]':
              - cell "maroon" [ref=e894]
              - 'cell "#800000 Copy #800000" [ref=e895]':
                - generic [ref=e896]: "#800000"
                - 'button "Copy #800000" [ref=e897] [cursor=pointer]': ⧉
              - cell "128" [ref=e898]
              - cell "0" [ref=e899]
              - cell "0" [ref=e900]
              - cell [ref=e901]
            - 'row "mediumaquamarine #66cdaa Copy #66cdaa 102 205 170" [ref=e903]':
              - cell "mediumaquamarine" [ref=e904]
              - 'cell "#66cdaa Copy #66cdaa" [ref=e905]':
                - generic [ref=e906]: "#66cdaa"
                - 'button "Copy #66cdaa" [ref=e907] [cursor=pointer]': ⧉
              - cell "102" [ref=e908]
              - cell "205" [ref=e909]
              - cell "170" [ref=e910]
              - cell [ref=e911]
            - 'row "mediumblue #0000cd Copy #0000cd 0 0 205" [ref=e913]':
              - cell "mediumblue" [ref=e914]
              - 'cell "#0000cd Copy #0000cd" [ref=e915]':
                - generic [ref=e916]: "#0000cd"
                - 'button "Copy #0000cd" [ref=e917] [cursor=pointer]': ⧉
              - cell "0" [ref=e918]
              - cell "0" [ref=e919]
              - cell "205" [ref=e920]
              - cell [ref=e921]
            - 'row "mediumorchid #ba55d3 Copy #ba55d3 186 85 211" [ref=e923]':
              - cell "mediumorchid" [ref=e924]
              - 'cell "#ba55d3 Copy #ba55d3" [ref=e925]':
                - generic [ref=e926]: "#ba55d3"
                - 'button "Copy #ba55d3" [ref=e927] [cursor=pointer]': ⧉
              - cell "186" [ref=e928]
              - cell "85" [ref=e929]
              - cell "211" [ref=e930]
              - cell [ref=e931]
            - 'row "mediumpurple #9370db Copy #9370db 147 112 219" [ref=e933]':
              - cell "mediumpurple" [ref=e934]
              - 'cell "#9370db Copy #9370db" [ref=e935]':
                - generic [ref=e936]: "#9370db"
                - 'button "Copy #9370db" [ref=e937] [cursor=pointer]': ⧉
              - cell "147" [ref=e938]
              - cell "112" [ref=e939]
              - cell "219" [ref=e940]
              - cell [ref=e941]
            - 'row "mediumseagreen #3cb371 Copy #3cb371 60 179 113" [ref=e943]':
              - cell "mediumseagreen" [ref=e944]
              - 'cell "#3cb371 Copy #3cb371" [ref=e945]':
                - generic [ref=e946]: "#3cb371"
                - 'button "Copy #3cb371" [ref=e947] [cursor=pointer]': ⧉
              - cell "60" [ref=e948]
              - cell "179" [ref=e949]
              - cell "113" [ref=e950]
              - cell [ref=e951]
            - 'row "mediumslateblue #7b68ee Copy #7b68ee 123 104 238" [ref=e953]':
              - cell "mediumslateblue" [ref=e954]
              - 'cell "#7b68ee Copy #7b68ee" [ref=e955]':
                - generic [ref=e956]: "#7b68ee"
                - 'button "Copy #7b68ee" [ref=e957] [cursor=pointer]': ⧉
              - cell "123" [ref=e958]
              - cell "104" [ref=e959]
              - cell "238" [ref=e960]
              - cell [ref=e961]
            - 'row "mediumspringgreen #00fa9a Copy #00fa9a 0 250 154" [ref=e963]':
              - cell "mediumspringgreen" [ref=e964]
              - 'cell "#00fa9a Copy #00fa9a" [ref=e965]':
                - generic [ref=e966]: "#00fa9a"
                - 'button "Copy #00fa9a" [ref=e967] [cursor=pointer]': ⧉
              - cell "0" [ref=e968]
              - cell "250" [ref=e969]
              - cell "154" [ref=e970]
              - cell [ref=e971]
            - 'row "mediumturquoise #48d1cc Copy #48d1cc 72 209 204" [ref=e973]':
              - cell "mediumturquoise" [ref=e974]
              - 'cell "#48d1cc Copy #48d1cc" [ref=e975]':
                - generic [ref=e976]: "#48d1cc"
                - 'button "Copy #48d1cc" [ref=e977] [cursor=pointer]': ⧉
              - cell "72" [ref=e978]
              - cell "209" [ref=e979]
              - cell "204" [ref=e980]
              - cell [ref=e981]
            - 'row "mediumvioletred #c71585 Copy #c71585 199 21 133" [ref=e983]':
              - cell "mediumvioletred" [ref=e984]
              - 'cell "#c71585 Copy #c71585" [ref=e985]':
                - generic [ref=e986]: "#c71585"
                - 'button "Copy #c71585" [ref=e987] [cursor=pointer]': ⧉
              - cell "199" [ref=e988]
              - cell "21" [ref=e989]
              - cell "133" [ref=e990]
              - cell [ref=e991]
            - 'row "midnightblue #191970 Copy #191970 25 25 112" [ref=e993]':
              - cell "midnightblue" [ref=e994]
              - 'cell "#191970 Copy #191970" [ref=e995]':
                - generic [ref=e996]: "#191970"
                - 'button "Copy #191970" [ref=e997] [cursor=pointer]': ⧉
              - cell "25" [ref=e998]
              - cell "25" [ref=e999]
              - cell "112" [ref=e1000]
              - cell [ref=e1001]
            - 'row "mintcream #f5fffa Copy #f5fffa 245 255 250" [ref=e1003]':
              - cell "mintcream" [ref=e1004]
              - 'cell "#f5fffa Copy #f5fffa" [ref=e1005]':
                - generic [ref=e1006]: "#f5fffa"
                - 'button "Copy #f5fffa" [ref=e1007] [cursor=pointer]': ⧉
              - cell "245" [ref=e1008]
              - cell "255" [ref=e1009]
              - cell "250" [ref=e1010]
              - cell [ref=e1011]
            - 'row "mistyrose #ffe4e1 Copy #ffe4e1 255 228 225" [ref=e1013]':
              - cell "mistyrose" [ref=e1014]
              - 'cell "#ffe4e1 Copy #ffe4e1" [ref=e1015]':
                - generic [ref=e1016]: "#ffe4e1"
                - 'button "Copy #ffe4e1" [ref=e1017] [cursor=pointer]': ⧉
              - cell "255" [ref=e1018]
              - cell "228" [ref=e1019]
              - cell "225" [ref=e1020]
              - cell [ref=e1021]
            - 'row "moccasin #ffe4b5 Copy #ffe4b5 255 228 181" [ref=e1023]':
              - cell "moccasin" [ref=e1024]
              - 'cell "#ffe4b5 Copy #ffe4b5" [ref=e1025]':
                - generic [ref=e1026]: "#ffe4b5"
                - 'button "Copy #ffe4b5" [ref=e1027] [cursor=pointer]': ⧉
              - cell "255" [ref=e1028]
              - cell "228" [ref=e1029]
              - cell "181" [ref=e1030]
              - cell [ref=e1031]
            - 'row "navajowhite #ffdead Copy #ffdead 255 222 173" [ref=e1033]':
              - cell "navajowhite" [ref=e1034]
              - 'cell "#ffdead Copy #ffdead" [ref=e1035]':
                - generic [ref=e1036]: "#ffdead"
                - 'button "Copy #ffdead" [ref=e1037] [cursor=pointer]': ⧉
              - cell "255" [ref=e1038]
              - cell "222" [ref=e1039]
              - cell "173" [ref=e1040]
              - cell [ref=e1041]
            - 'row "navy #000080 Copy #000080 0 0 128" [ref=e1043]':
              - cell "navy" [ref=e1044]
              - 'cell "#000080 Copy #000080" [ref=e1045]':
                - generic [ref=e1046]: "#000080"
                - 'button "Copy #000080" [ref=e1047] [cursor=pointer]': ⧉
              - cell "0" [ref=e1048]
              - cell "0" [ref=e1049]
              - cell "128" [ref=e1050]
              - cell [ref=e1051]
            - 'row "oldlace #fdf5e6 Copy #fdf5e6 253 245 230" [ref=e1053]':
              - cell "oldlace" [ref=e1054]
              - 'cell "#fdf5e6 Copy #fdf5e6" [ref=e1055]':
                - generic [ref=e1056]: "#fdf5e6"
                - 'button "Copy #fdf5e6" [ref=e1057] [cursor=pointer]': ⧉
              - cell "253" [ref=e1058]
              - cell "245" [ref=e1059]
              - cell "230" [ref=e1060]
              - cell [ref=e1061]
            - 'row "olive #808000 Copy #808000 128 128 0" [ref=e1063]':
              - cell "olive" [ref=e1064]
              - 'cell "#808000 Copy #808000" [ref=e1065]':
                - generic [ref=e1066]: "#808000"
                - 'button "Copy #808000" [ref=e1067] [cursor=pointer]': ⧉
              - cell "128" [ref=e1068]
              - cell "128" [ref=e1069]
              - cell "0" [ref=e1070]
              - cell [ref=e1071]
            - 'row "olivedrab #6b8e23 Copy #6b8e23 107 142 35" [ref=e1073]':
              - cell "olivedrab" [ref=e1074]
              - 'cell "#6b8e23 Copy #6b8e23" [ref=e1075]':
                - generic [ref=e1076]: "#6b8e23"
                - 'button "Copy #6b8e23" [ref=e1077] [cursor=pointer]': ⧉
              - cell "107" [ref=e1078]
              - cell "142" [ref=e1079]
              - cell "35" [ref=e1080]
              - cell [ref=e1081]
            - 'row "orange #ffa500 Copy #ffa500 255 165 0" [ref=e1083]':
              - cell "orange" [ref=e1084]
              - 'cell "#ffa500 Copy #ffa500" [ref=e1085]':
                - generic [ref=e1086]: "#ffa500"
                - 'button "Copy #ffa500" [ref=e1087] [cursor=pointer]': ⧉
              - cell "255" [ref=e1088]
              - cell "165" [ref=e1089]
              - cell "0" [ref=e1090]
              - cell [ref=e1091]
            - 'row "orangered #ff4500 Copy #ff4500 255 69 0" [ref=e1093]':
              - cell "orangered" [ref=e1094]
              - 'cell "#ff4500 Copy #ff4500" [ref=e1095]':
                - generic [ref=e1096]: "#ff4500"
                - 'button "Copy #ff4500" [ref=e1097] [cursor=pointer]': ⧉
              - cell "255" [ref=e1098]
              - cell "69" [ref=e1099]
              - cell "0" [ref=e1100]
              - cell [ref=e1101]
            - 'row "orchid #da70d6 Copy #da70d6 218 112 214" [ref=e1103]':
              - cell "orchid" [ref=e1104]
              - 'cell "#da70d6 Copy #da70d6" [ref=e1105]':
                - generic [ref=e1106]: "#da70d6"
                - 'button "Copy #da70d6" [ref=e1107] [cursor=pointer]': ⧉
              - cell "218" [ref=e1108]
              - cell "112" [ref=e1109]
              - cell "214" [ref=e1110]
              - cell [ref=e1111]
            - 'row "palegoldenrod #eee8aa Copy #eee8aa 238 232 170" [ref=e1113]':
              - cell "palegoldenrod" [ref=e1114]
              - 'cell "#eee8aa Copy #eee8aa" [ref=e1115]':
                - generic [ref=e1116]: "#eee8aa"
                - 'button "Copy #eee8aa" [ref=e1117] [cursor=pointer]': ⧉
              - cell "238" [ref=e1118]
              - cell "232" [ref=e1119]
              - cell "170" [ref=e1120]
              - cell [ref=e1121]
            - 'row "palegreen #98fb98 Copy #98fb98 152 251 152" [ref=e1123]':
              - cell "palegreen" [ref=e1124]
              - 'cell "#98fb98 Copy #98fb98" [ref=e1125]':
                - generic [ref=e1126]: "#98fb98"
                - 'button "Copy #98fb98" [ref=e1127] [cursor=pointer]': ⧉
              - cell "152" [ref=e1128]
              - cell "251" [ref=e1129]
              - cell "152" [ref=e1130]
              - cell [ref=e1131]
            - 'row "paleturquoise #afeeee Copy #afeeee 175 238 238" [ref=e1133]':
              - cell "paleturquoise" [ref=e1134]
              - 'cell "#afeeee Copy #afeeee" [ref=e1135]':
                - generic [ref=e1136]: "#afeeee"
                - 'button "Copy #afeeee" [ref=e1137] [cursor=pointer]': ⧉
              - cell "175" [ref=e1138]
              - cell "238" [ref=e1139]
              - cell "238" [ref=e1140]
              - cell [ref=e1141]
            - 'row "palevioletred #db7093 Copy #db7093 219 112 147" [ref=e1143]':
              - cell "palevioletred" [ref=e1144]
              - 'cell "#db7093 Copy #db7093" [ref=e1145]':
                - generic [ref=e1146]: "#db7093"
                - 'button "Copy #db7093" [ref=e1147] [cursor=pointer]': ⧉
              - cell "219" [ref=e1148]
              - cell "112" [ref=e1149]
              - cell "147" [ref=e1150]
              - cell [ref=e1151]
            - 'row "papayawhip #ffefd5 Copy #ffefd5 255 239 213" [ref=e1153]':
              - cell "papayawhip" [ref=e1154]
              - 'cell "#ffefd5 Copy #ffefd5" [ref=e1155]':
                - generic [ref=e1156]: "#ffefd5"
                - 'button "Copy #ffefd5" [ref=e1157] [cursor=pointer]': ⧉
              - cell "255" [ref=e1158]
              - cell "239" [ref=e1159]
              - cell "213" [ref=e1160]
              - cell [ref=e1161]
            - 'row "peachpuff #ffdab9 Copy #ffdab9 255 218 185" [ref=e1163]':
              - cell "peachpuff" [ref=e1164]
              - 'cell "#ffdab9 Copy #ffdab9" [ref=e1165]':
                - generic [ref=e1166]: "#ffdab9"
                - 'button "Copy #ffdab9" [ref=e1167] [cursor=pointer]': ⧉
              - cell "255" [ref=e1168]
              - cell "218" [ref=e1169]
              - cell "185" [ref=e1170]
              - cell [ref=e1171]
            - 'row "peru #cd853f Copy #cd853f 205 133 63" [ref=e1173]':
              - cell "peru" [ref=e1174]
              - 'cell "#cd853f Copy #cd853f" [ref=e1175]':
                - generic [ref=e1176]: "#cd853f"
                - 'button "Copy #cd853f" [ref=e1177] [cursor=pointer]': ⧉
              - cell "205" [ref=e1178]
              - cell "133" [ref=e1179]
              - cell "63" [ref=e1180]
              - cell [ref=e1181]
            - 'row "pink #ffc0cb Copy #ffc0cb 255 192 203" [ref=e1183]':
              - cell "pink" [ref=e1184]
              - 'cell "#ffc0cb Copy #ffc0cb" [ref=e1185]':
                - generic [ref=e1186]: "#ffc0cb"
                - 'button "Copy #ffc0cb" [ref=e1187] [cursor=pointer]': ⧉
              - cell "255" [ref=e1188]
              - cell "192" [ref=e1189]
              - cell "203" [ref=e1190]
              - cell [ref=e1191]
            - 'row "plum #dda0dd Copy #dda0dd 221 160 221" [ref=e1193]':
              - cell "plum" [ref=e1194]
              - 'cell "#dda0dd Copy #dda0dd" [ref=e1195]':
                - generic [ref=e1196]: "#dda0dd"
                - 'button "Copy #dda0dd" [ref=e1197] [cursor=pointer]': ⧉
              - cell "221" [ref=e1198]
              - cell "160" [ref=e1199]
              - cell "221" [ref=e1200]
              - cell [ref=e1201]
            - 'row "powderblue #b0e0e6 Copy #b0e0e6 176 224 230" [ref=e1203]':
              - cell "powderblue" [ref=e1204]
              - 'cell "#b0e0e6 Copy #b0e0e6" [ref=e1205]':
                - generic [ref=e1206]: "#b0e0e6"
                - 'button "Copy #b0e0e6" [ref=e1207] [cursor=pointer]': ⧉
              - cell "176" [ref=e1208]
              - cell "224" [ref=e1209]
              - cell "230" [ref=e1210]
              - cell [ref=e1211]
            - 'row "purple #800080 Copy #800080 128 0 128" [ref=e1213]':
              - cell "purple" [ref=e1214]
              - 'cell "#800080 Copy #800080" [ref=e1215]':
                - generic [ref=e1216]: "#800080"
                - 'button "Copy #800080" [ref=e1217] [cursor=pointer]': ⧉
              - cell "128" [ref=e1218]
              - cell "0" [ref=e1219]
              - cell "128" [ref=e1220]
              - cell [ref=e1221]
            - 'row "red #ff0000 Copy #ff0000 255 0 0" [ref=e1223]':
              - cell "red" [ref=e1224]
              - 'cell "#ff0000 Copy #ff0000" [ref=e1225]':
                - generic [ref=e1226]: "#ff0000"
                - 'button "Copy #ff0000" [ref=e1227] [cursor=pointer]': ⧉
              - cell "255" [ref=e1228]
              - cell "0" [ref=e1229]
              - cell "0" [ref=e1230]
              - cell [ref=e1231]
            - 'row "rosybrown #bc8f8f Copy #bc8f8f 188 143 143" [ref=e1233]':
              - cell "rosybrown" [ref=e1234]
              - 'cell "#bc8f8f Copy #bc8f8f" [ref=e1235]':
                - generic [ref=e1236]: "#bc8f8f"
                - 'button "Copy #bc8f8f" [ref=e1237] [cursor=pointer]': ⧉
              - cell "188" [ref=e1238]
              - cell "143" [ref=e1239]
              - cell "143" [ref=e1240]
              - cell [ref=e1241]
            - 'row "royalblue #4169e1 Copy #4169e1 65 105 225" [ref=e1243]':
              - cell "royalblue" [ref=e1244]
              - 'cell "#4169e1 Copy #4169e1" [ref=e1245]':
                - generic [ref=e1246]: "#4169e1"
                - 'button "Copy #4169e1" [ref=e1247] [cursor=pointer]': ⧉
              - cell "65" [ref=e1248]
              - cell "105" [ref=e1249]
              - cell "225" [ref=e1250]
              - cell [ref=e1251]
            - 'row "saddlebrown #8b4513 Copy #8b4513 139 69 19" [ref=e1253]':
              - cell "saddlebrown" [ref=e1254]
              - 'cell "#8b4513 Copy #8b4513" [ref=e1255]':
                - generic [ref=e1256]: "#8b4513"
                - 'button "Copy #8b4513" [ref=e1257] [cursor=pointer]': ⧉
              - cell "139" [ref=e1258]
              - cell "69" [ref=e1259]
              - cell "19" [ref=e1260]
              - cell [ref=e1261]
            - 'row "salmon #fa8072 Copy #fa8072 250 128 114" [ref=e1263]':
              - cell "salmon" [ref=e1264]
              - 'cell "#fa8072 Copy #fa8072" [ref=e1265]':
                - generic [ref=e1266]: "#fa8072"
                - 'button "Copy #fa8072" [ref=e1267] [cursor=pointer]': ⧉
              - cell "250" [ref=e1268]
              - cell "128" [ref=e1269]
              - cell "114" [ref=e1270]
              - cell [ref=e1271]
            - 'row "sandybrown #f4a460 Copy #f4a460 244 164 96" [ref=e1273]':
              - cell "sandybrown" [ref=e1274]
              - 'cell "#f4a460 Copy #f4a460" [ref=e1275]':
                - generic [ref=e1276]: "#f4a460"
                - 'button "Copy #f4a460" [ref=e1277] [cursor=pointer]': ⧉
              - cell "244" [ref=e1278]
              - cell "164" [ref=e1279]
              - cell "96" [ref=e1280]
              - cell [ref=e1281]
            - 'row "seagreen #2e8b57 Copy #2e8b57 46 139 87" [ref=e1283]':
              - cell "seagreen" [ref=e1284]
              - 'cell "#2e8b57 Copy #2e8b57" [ref=e1285]':
                - generic [ref=e1286]: "#2e8b57"
                - 'button "Copy #2e8b57" [ref=e1287] [cursor=pointer]': ⧉
              - cell "46" [ref=e1288]
              - cell "139" [ref=e1289]
              - cell "87" [ref=e1290]
              - cell [ref=e1291]
            - 'row "seashell #fff5ee Copy #fff5ee 255 245 238" [ref=e1293]':
              - cell "seashell" [ref=e1294]
              - 'cell "#fff5ee Copy #fff5ee" [ref=e1295]':
                - generic [ref=e1296]: "#fff5ee"
                - 'button "Copy #fff5ee" [ref=e1297] [cursor=pointer]': ⧉
              - cell "255" [ref=e1298]
              - cell "245" [ref=e1299]
              - cell "238" [ref=e1300]
              - cell [ref=e1301]
            - 'row "sienna #a0522d Copy #a0522d 160 82 45" [ref=e1303]':
              - cell "sienna" [ref=e1304]
              - 'cell "#a0522d Copy #a0522d" [ref=e1305]':
                - generic [ref=e1306]: "#a0522d"
                - 'button "Copy #a0522d" [ref=e1307] [cursor=pointer]': ⧉
              - cell "160" [ref=e1308]
              - cell "82" [ref=e1309]
              - cell "45" [ref=e1310]
              - cell [ref=e1311]
            - 'row "silver #c0c0c0 Copy #c0c0c0 192 192 192" [ref=e1313]':
              - cell "silver" [ref=e1314]
              - 'cell "#c0c0c0 Copy #c0c0c0" [ref=e1315]':
                - generic [ref=e1316]: "#c0c0c0"
                - 'button "Copy #c0c0c0" [ref=e1317] [cursor=pointer]': ⧉
              - cell "192" [ref=e1318]
              - cell "192" [ref=e1319]
              - cell "192" [ref=e1320]
              - cell [ref=e1321]
            - 'row "skyblue #87ceeb Copy #87ceeb 135 206 235" [ref=e1323]':
              - cell "skyblue" [ref=e1324]
              - 'cell "#87ceeb Copy #87ceeb" [ref=e1325]':
                - generic [ref=e1326]: "#87ceeb"
                - 'button "Copy #87ceeb" [ref=e1327] [cursor=pointer]': ⧉
              - cell "135" [ref=e1328]
              - cell "206" [ref=e1329]
              - cell "235" [ref=e1330]
              - cell [ref=e1331]
            - 'row "slateblue #6a5acd Copy #6a5acd 106 90 205" [ref=e1333]':
              - cell "slateblue" [ref=e1334]
              - 'cell "#6a5acd Copy #6a5acd" [ref=e1335]':
                - generic [ref=e1336]: "#6a5acd"
                - 'button "Copy #6a5acd" [ref=e1337] [cursor=pointer]': ⧉
              - cell "106" [ref=e1338]
              - cell "90" [ref=e1339]
              - cell "205" [ref=e1340]
              - cell [ref=e1341]
            - 'row "slategray #708090 Copy #708090 112 128 144" [ref=e1343]':
              - cell "slategray" [ref=e1344]
              - 'cell "#708090 Copy #708090" [ref=e1345]':
                - generic [ref=e1346]: "#708090"
                - 'button "Copy #708090" [ref=e1347] [cursor=pointer]': ⧉
              - cell "112" [ref=e1348]
              - cell "128" [ref=e1349]
              - cell "144" [ref=e1350]
              - cell [ref=e1351]
            - 'row "slategrey #708090 Copy #708090 112 128 144" [ref=e1353]':
              - cell "slategrey" [ref=e1354]
              - 'cell "#708090 Copy #708090" [ref=e1355]':
                - generic [ref=e1356]: "#708090"
                - 'button "Copy #708090" [ref=e1357] [cursor=pointer]': ⧉
              - cell "112" [ref=e1358]
              - cell "128" [ref=e1359]
              - cell "144" [ref=e1360]
              - cell [ref=e1361]
            - 'row "snow #fffafa Copy #fffafa 255 250 250" [ref=e1363]':
              - cell "snow" [ref=e1364]
              - 'cell "#fffafa Copy #fffafa" [ref=e1365]':
                - generic [ref=e1366]: "#fffafa"
                - 'button "Copy #fffafa" [ref=e1367] [cursor=pointer]': ⧉
              - cell "255" [ref=e1368]
              - cell "250" [ref=e1369]
              - cell "250" [ref=e1370]
              - cell [ref=e1371]
            - 'row "springgreen #00ff7f Copy #00ff7f 0 255 127" [ref=e1373]':
              - cell "springgreen" [ref=e1374]
              - 'cell "#00ff7f Copy #00ff7f" [ref=e1375]':
                - generic [ref=e1376]: "#00ff7f"
                - 'button "Copy #00ff7f" [ref=e1377] [cursor=pointer]': ⧉
              - cell "0" [ref=e1378]
              - cell "255" [ref=e1379]
              - cell "127" [ref=e1380]
              - cell [ref=e1381]
            - 'row "steelblue #4682b4 Copy #4682b4 70 130 180" [ref=e1383]':
              - cell "steelblue" [ref=e1384]
              - 'cell "#4682b4 Copy #4682b4" [ref=e1385]':
                - generic [ref=e1386]: "#4682b4"
                - 'button "Copy #4682b4" [ref=e1387] [cursor=pointer]': ⧉
              - cell "70" [ref=e1388]
              - cell "130" [ref=e1389]
              - cell "180" [ref=e1390]
              - cell [ref=e1391]
            - 'row "tan #d2b48c Copy #d2b48c 210 180 140" [ref=e1393]':
              - cell "tan" [ref=e1394]
              - 'cell "#d2b48c Copy #d2b48c" [ref=e1395]':
                - generic [ref=e1396]: "#d2b48c"
                - 'button "Copy #d2b48c" [ref=e1397] [cursor=pointer]': ⧉
              - cell "210" [ref=e1398]
              - cell "180" [ref=e1399]
              - cell "140" [ref=e1400]
              - cell [ref=e1401]
            - 'row "teal #008080 Copy #008080 0 128 128" [ref=e1403]':
              - cell "teal" [ref=e1404]
              - 'cell "#008080 Copy #008080" [ref=e1405]':
                - generic [ref=e1406]: "#008080"
                - 'button "Copy #008080" [ref=e1407] [cursor=pointer]': ⧉
              - cell "0" [ref=e1408]
              - cell "128" [ref=e1409]
              - cell "128" [ref=e1410]
              - cell [ref=e1411]
            - 'row "thistle #d8bfd8 Copy #d8bfd8 216 191 216" [ref=e1413]':
              - cell "thistle" [ref=e1414]
              - 'cell "#d8bfd8 Copy #d8bfd8" [ref=e1415]':
                - generic [ref=e1416]: "#d8bfd8"
                - 'button "Copy #d8bfd8" [ref=e1417] [cursor=pointer]': ⧉
              - cell "216" [ref=e1418]
              - cell "191" [ref=e1419]
              - cell "216" [ref=e1420]
              - cell [ref=e1421]
            - 'row "tomato #ff6347 Copy #ff6347 255 99 71" [ref=e1423]':
              - cell "tomato" [ref=e1424]
              - 'cell "#ff6347 Copy #ff6347" [ref=e1425]':
                - generic [ref=e1426]: "#ff6347"
                - 'button "Copy #ff6347" [ref=e1427] [cursor=pointer]': ⧉
              - cell "255" [ref=e1428]
              - cell "99" [ref=e1429]
              - cell "71" [ref=e1430]
              - cell [ref=e1431]
            - 'row "turquoise #40e0d0 Copy #40e0d0 64 224 208" [ref=e1433]':
              - cell "turquoise" [ref=e1434]
              - 'cell "#40e0d0 Copy #40e0d0" [ref=e1435]':
                - generic [ref=e1436]: "#40e0d0"
                - 'button "Copy #40e0d0" [ref=e1437] [cursor=pointer]': ⧉
              - cell "64" [ref=e1438]
              - cell "224" [ref=e1439]
              - cell "208" [ref=e1440]
              - cell [ref=e1441]
            - 'row "violet #ee82ee Copy #ee82ee 238 130 238" [ref=e1443]':
              - cell "violet" [ref=e1444]
              - 'cell "#ee82ee Copy #ee82ee" [ref=e1445]':
                - generic [ref=e1446]: "#ee82ee"
                - 'button "Copy #ee82ee" [ref=e1447] [cursor=pointer]': ⧉
              - cell "238" [ref=e1448]
              - cell "130" [ref=e1449]
              - cell "238" [ref=e1450]
              - cell [ref=e1451]
            - 'row "wheat #f5deb3 Copy #f5deb3 245 222 179" [ref=e1453]':
              - cell "wheat" [ref=e1454]
              - 'cell "#f5deb3 Copy #f5deb3" [ref=e1455]':
                - generic [ref=e1456]: "#f5deb3"
                - 'button "Copy #f5deb3" [ref=e1457] [cursor=pointer]': ⧉
              - cell "245" [ref=e1458]
              - cell "222" [ref=e1459]
              - cell "179" [ref=e1460]
              - cell [ref=e1461]
            - 'row "white #ffffff Copy #ffffff 255 255 255" [ref=e1463]':
              - cell "white" [ref=e1464]
              - 'cell "#ffffff Copy #ffffff" [ref=e1465]':
                - generic [ref=e1466]: "#ffffff"
                - 'button "Copy #ffffff" [ref=e1467] [cursor=pointer]': ⧉
              - cell "255" [ref=e1468]
              - cell "255" [ref=e1469]
              - cell "255" [ref=e1470]
              - cell [ref=e1471]
            - 'row "whitesmoke #f5f5f5 Copy #f5f5f5 245 245 245" [ref=e1473]':
              - cell "whitesmoke" [ref=e1474]
              - 'cell "#f5f5f5 Copy #f5f5f5" [ref=e1475]':
                - generic [ref=e1476]: "#f5f5f5"
                - 'button "Copy #f5f5f5" [ref=e1477] [cursor=pointer]': ⧉
              - cell "245" [ref=e1478]
              - cell "245" [ref=e1479]
              - cell "245" [ref=e1480]
              - cell [ref=e1481]
            - 'row "yellow #ffff00 Copy #ffff00 255 255 0" [ref=e1483]':
              - cell "yellow" [ref=e1484]
              - 'cell "#ffff00 Copy #ffff00" [ref=e1485]':
                - generic [ref=e1486]: "#ffff00"
                - 'button "Copy #ffff00" [ref=e1487] [cursor=pointer]': ⧉
              - cell "255" [ref=e1488]
              - cell "255" [ref=e1489]
              - cell "0" [ref=e1490]
              - cell [ref=e1491]
            - 'row "yellowgreen #9acd32 Copy #9acd32 154 205 50" [ref=e1493]':
              - cell "yellowgreen" [ref=e1494]
              - 'cell "#9acd32 Copy #9acd32" [ref=e1495]':
                - generic [ref=e1496]: "#9acd32"
                - 'button "Copy #9acd32" [ref=e1497] [cursor=pointer]': ⧉
              - cell "154" [ref=e1498]
              - cell "205" [ref=e1499]
              - cell "50" [ref=e1500]
              - cell [ref=e1501]
      - contentinfo [ref=e1503]
  - button "Open Next.js Dev Tools" [ref=e1509] [cursor=pointer]:
    - img [ref=e1510]
  - alert [ref=e1513]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test'
  2   | 
  3   | // --- Core pages ---
  4   | 
  5   | test('home page renders', async ({ page }) => {
  6   |   await page.goto('/')
  7   |   await expect(page.locator('h1')).toContainText('Rasile')
  8   |   await expect(page.locator('.homeWrapper')).toBeVisible()
  9   | })
  10  | 
  11  | test('about page renders', async ({ page }) => {
  12  |   await page.goto('/About')
  13  |   await expect(page.locator('h1')).toContainText('Built to deliver software')
  14  | })
  15  | 
  16  | test('services page renders', async ({ page }) => {
  17  |   await page.goto('/Services')
  18  |   await expect(page.locator('h1')).toContainText('What we build.')
  19  | })
  20  | 
  21  | test('projects page renders', async ({ page }) => {
  22  |   await page.goto('/Projects')
  23  |   await expect(page.locator('h1')).toContainText('Projects.')
  24  | })
  25  | 
  26  | test('404 page renders', async ({ page }) => {
  27  |   await page.goto('/this-page-does-not-exist')
  28  |   await expect(page).toHaveURL(/this-page-does-not-exist/)
  29  |   await expect(page.locator('body')).toBeVisible()
  30  | })
  31  | 
  32  | // --- Prototypes index ---
  33  | 
  34  | test('prototypes index renders', async ({ page }) => {
  35  |   await page.goto('/Prototypes')
  36  |   await expect(page.locator('h1')).toContainText('Prototypes.')
  37  | })
  38  | 
  39  | // --- Prototypes ---
  40  | 
  41  | test('Pokemon Effectiveness renders', async ({ page }) => {
  42  |   await page.goto('/Prototypes/PokemonEffectiveness', { timeout: 60000 })
  43  |   await expect(page.locator('text=Pokémon Search')).toBeVisible({ timeout: 30000 })
  44  | })
  45  | 
  46  | test('Champions Team Builder renders', async ({ page }) => {
  47  |   await page.goto('/Prototypes/ChampionsTeamBuilder', { timeout: 60000 })
  48  |   await expect(page.locator('h2.pokemon-title')).toContainText('Champions Team Builder')
  49  | })
  50  | 
  51  | test('Jungle Clears renders', async ({ page }) => {
  52  |   await page.goto('/Prototypes/JungleClears')
  53  |   await expect(page.locator('input[placeholder*="Champion name"]')).toBeVisible()
  54  | })
  55  | 
  56  | test('Menu renders', async ({ page }) => {
  57  |   await page.goto('/Prototypes/Menu')
  58  |   await expect(page.locator('input[placeholder*="Recipe name"]')).toBeVisible()
  59  | })
  60  | 
  61  | test('Timezones renders', async ({ page }) => {
  62  |   await page.goto('/Prototypes/Timezones')
  63  |   await expect(page.locator('.panel')).toBeVisible()
  64  |   await expect(page.locator('button').first()).toBeVisible()
  65  | })
  66  | 
  67  | test('HTML Colors renders', async ({ page }) => {
  68  |   await page.goto('/Prototypes/HtmlColors')
> 69  |   await expect(page.locator('.colorTableCard')).toBeVisible()
      |                                                 ^ Error: expect(locator).toBeVisible() failed
  70  |   await expect(page.locator('table.colorTable')).toBeVisible()
  71  | })
  72  | 
  73  | test('Contraction Timer renders', async ({ page }) => {
  74  |   await page.goto('/Prototypes/ContractionTimer')
  75  |   await expect(page.locator('.panel')).toBeVisible()
  76  |   // The surge button is always present on load
  77  |   await expect(page.locator('button').first()).toBeVisible()
  78  | })
  79  | 
  80  | test('PHP Migration renders', async ({ page }) => {
  81  |   await page.goto('/Prototypes/PhpMigration')
  82  |   await expect(page.locator('h1')).toBeVisible()
  83  | })
  84  | 
  85  | test('Loop Hero Solver renders', async ({ page }) => {
  86  |   await page.goto('/Prototypes/LoopHeroSolver')
  87  |   await expect(page.locator('.panel')).toBeVisible()
  88  | })
  89  | 
  90  | test('Cards For Beats renders', async ({ page }) => {
  91  |   await page.goto('/Prototypes/CardsForBeats')
  92  |   await expect(page.locator('.panel')).toBeVisible()
  93  |   await expect(page.locator('button[aria-label="Settings"]')).toBeVisible()
  94  | })
  95  | 
  96  | test('Story Generator renders', async ({ page }) => {
  97  |   await page.goto('/Prototypes/StoryGenerator')
  98  |   await expect(page.locator('text=Story Generator')).toBeVisible()
  99  | })
  100 | 
  101 | test('Sourdough Guide renders', async ({ page }) => {
  102 |   await page.goto('/Prototypes/Sourdough')
  103 |   await expect(page.locator('h2').first()).toBeVisible()
  104 | })
  105 | 
  106 | test('Veg Patch renders', async ({ page }) => {
  107 |   await page.goto('/Prototypes/VegPatch')
  108 |   await expect(page.locator('h1').first()).toBeVisible()
  109 | })
  110 | 
  111 | // --- Nav smoke test: clicking through from home ---
  112 | 
  113 | test('nav links reach correct pages', async ({ page }) => {
  114 |   await page.goto('/')
  115 | 
  116 |   await page.locator('nav').getByText('About').click()
  117 |   await page.waitForURL(/\/About/)
  118 |   await expect(page.locator('h1')).toBeVisible()
  119 | 
  120 |   await page.locator('nav').getByText('Services').click()
  121 |   await page.waitForURL(/\/Services/)
  122 |   await expect(page.locator('h1')).toBeVisible()
  123 | 
  124 |   await page.locator('nav').getByText('Projects').click()
  125 |   await page.waitForURL(/\/Projects/)
  126 |   await expect(page.locator('h1')).toBeVisible()
  127 | 
  128 |   await page.locator('nav').getByText('Prototypes').click()
  129 |   await page.waitForURL(/\/Prototypes/)
  130 |   await expect(page.locator('h1')).toBeVisible()
  131 | })
  132 | 
```