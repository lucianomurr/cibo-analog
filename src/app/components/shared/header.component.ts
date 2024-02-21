import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <nav
      class=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20"
    >
      <!-- logo -->
      <div class="inline-flex">
        <a class="_o6689fn" href="/"
          ><svg width="500" height="100" viewBox="0 0 1638 458" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_411_3)">
<path d="M884.27 311.309L895.99 291.009L978.031 338.376L966.311 358.675L884.27 311.309Z" fill="#FAF9F9"/>
<path d="M991.365 345.431L1077.04 197.029C1095.46 165.13 1084.43 123.963 1052.53 105.545C1020.63 87.1282 979.464 98.159 961.047 130.058L930.911 182.255L930.586 182.067L930.586 165.612C930.586 152.72 920.038 142.172 907.146 142.172C894.254 142.172 883.706 152.72 883.706 165.612L885.907 285.189L991.365 345.431Z" fill="#FFC107"/>
<path d="M927.337 145.421C932.302 150.387 935.214 156.834 935.661 163.742L956.593 127.486C976.474 93.05 1020.67 81.2091 1055.1 101.091C1089.54 120.973 1101.38 165.163 1081.5 199.6L995.818 348.002C994.398 350.462 991.253 351.305 988.793 349.885L980.191 344.919L970.763 361.247C970.082 362.428 968.958 363.29 967.641 363.643C966.323 363.996 964.919 363.811 963.738 363.129L881.697 315.763C880.467 315.054 879.642 313.911 879.301 312.64C878.96 311.369 879.105 309.967 879.815 308.738L888.963 292.892L883.337 289.643C882.141 288.953 881.289 287.822 880.94 286.52C880.834 286.122 880.774 285.707 880.766 285.283L878.565 165.706C878.564 165.674 878.564 165.643 878.564 165.612C878.564 149.851 891.386 137.029 907.147 137.028C914.755 137.03 921.925 140.01 927.337 145.421ZM888.849 165.569L890.995 282.188L903.14 289.2C905.601 290.62 906.443 293.766 905.023 296.226C903.602 298.685 900.457 299.529 897.997 298.108L897.87 298.035L891.293 309.426L964.427 351.65L971.283 339.775L927.8 314.67C926.57 313.96 925.744 312.818 925.403 311.547C925.063 310.276 925.207 308.874 925.917 307.645C927.338 305.185 930.483 304.342 932.943 305.762L989.483 338.405L1072.59 194.458C1089.64 164.933 1079.48 127.045 1049.96 109.999C1020.43 92.9531 982.546 103.105 965.5 132.63L935.728 184.197L935.728 207.805C935.728 210.644 933.425 212.947 930.584 212.948C927.744 212.947 925.442 210.647 925.441 207.804L925.441 165.612C925.441 160.751 923.531 156.163 920.062 152.695C916.594 149.226 912.006 147.316 907.144 147.316C897.072 147.316 888.873 155.5 888.849 165.569Z" fill="#FFC107"/>
<path d="M917.296 296.728C919.759 298.142 920.61 301.286 919.196 303.749C917.781 306.212 914.638 307.063 912.175 305.649L912.111 305.612C910.876 304.903 910.046 303.758 909.704 302.483C909.365 301.215 909.507 299.819 910.212 298.591C911.626 296.127 914.77 295.277 917.233 296.691L917.296 296.728Z" fill="white"/>
<path d="M1035.55 127.681C1035.21 126.41 1035.36 125.008 1036.07 123.778C1037.49 121.318 1040.63 120.475 1043.09 121.896L1043.12 121.912C1045.58 123.332 1046.41 126.469 1044.99 128.929C1043.57 131.389 1040.41 132.224 1037.95 130.804C1036.72 130.094 1035.89 128.952 1035.55 127.681Z" fill="white"/>
<path d="M1050.33 141.759C1048.63 139.489 1049.08 136.265 1051.35 134.557C1053.62 132.849 1056.84 133.304 1058.55 135.573C1071.18 152.347 1072.58 174.878 1062.14 192.975C1060.72 195.435 1057.57 196.278 1055.11 194.858C1053.88 194.147 1053.06 193.006 1052.71 191.735C1052.37 190.464 1052.52 189.062 1053.23 187.832C1061.61 173.314 1060.47 155.23 1050.33 141.759Z" fill="white"/>
</g>
<path d="M151.174 294.51C134.95 294.51 120.364 290.844 107.416 283.512C94.624 276.18 84.562 266.04 77.23 253.092C70.054 240.144 66.466 225.48 66.466 209.1C66.466 192.72 70.054 178.056 77.23 165.108C84.562 152.16 94.624 142.02 107.416 134.688C120.364 127.356 134.95 123.69 151.174 123.69C165.37 123.69 178.318 126.732 190.018 132.816C201.874 138.744 211.39 147.09 218.566 157.854C225.898 168.618 230.11 180.708 231.202 194.124H193.294C191.89 187.26 189.16 181.332 185.104 176.34C181.204 171.192 176.29 167.214 170.362 164.406C164.59 161.598 158.038 160.194 150.706 160.194C141.814 160.194 133.858 162.3 126.838 166.512C119.974 170.724 114.592 176.574 110.692 184.062C106.792 191.394 104.842 199.74 104.842 209.1C104.842 218.46 106.792 226.884 110.692 234.372C114.592 241.704 119.974 247.476 126.838 251.688C133.858 255.744 141.814 257.772 150.706 257.772C158.038 257.772 164.59 256.446 170.362 253.794C176.29 250.986 181.204 247.086 185.104 242.094C189.16 236.946 191.89 230.94 193.294 224.076H231.202C230.11 237.492 225.898 249.582 218.566 260.346C211.39 271.11 201.874 279.534 190.018 285.618C178.318 291.546 165.37 294.51 151.174 294.51ZM259.743 291V124.86H292.269V214.482C294.453 201.534 299.289 191.16 306.777 183.36C314.421 175.56 323.703 171.66 334.623 171.66C343.359 171.66 351.003 173.844 357.555 178.212C364.107 182.58 369.177 188.82 372.765 196.932C376.353 204.888 378.147 214.17 378.147 224.778V291H345.387V229.926C345.231 221.502 342.735 214.716 337.899 209.568C333.063 204.42 326.745 201.846 318.945 201.846C313.953 201.846 309.429 203.094 305.373 205.59C301.317 208.086 298.119 211.44 295.779 215.652C293.439 219.864 292.269 224.622 292.269 229.926V291H259.743ZM414.219 291V174H446.745V291H414.219ZM429.429 160.662L410.007 116.67H451.425L431.769 160.662H429.429ZM508.459 293.808C498.007 293.808 489.583 291.312 483.187 286.32C476.791 281.172 473.593 273.918 473.593 264.558C473.593 255.51 476.557 248.49 482.485 243.498C488.569 238.506 495.589 235.074 503.545 233.202C511.657 231.33 520.783 229.926 530.923 228.99C538.879 228.522 545.041 227.508 549.409 225.948C553.933 224.388 556.195 221.424 556.195 217.056C556.195 210.816 554.011 206.058 549.643 202.782C545.431 199.35 540.283 197.634 534.199 197.634C527.023 197.634 521.173 199.584 516.649 203.484C512.125 207.384 509.473 212.844 508.693 219.864H478.507C478.975 209.724 481.783 201.066 486.931 193.89C492.079 186.558 498.787 181.02 507.055 177.276C515.479 173.532 524.683 171.66 534.667 171.66C544.651 171.66 553.543 173.532 561.343 177.276C569.143 181.02 575.227 186.48 579.595 193.656C583.963 200.832 586.147 209.412 586.147 219.396V262.452H599.719V291H556.429V248.88C553.777 261.984 548.317 272.748 540.049 281.172C531.937 289.596 521.407 293.808 508.459 293.808ZM524.605 268.536C530.221 268.536 535.447 266.898 540.283 263.622C545.119 260.346 548.941 256.134 551.749 250.986C554.713 245.682 556.195 240.066 556.195 234.138L556.429 226.884C554.557 228.6 552.217 229.848 549.409 230.628C546.757 231.408 543.013 232.188 538.177 232.968C537.865 232.968 537.553 233.046 537.241 233.202C536.929 233.202 536.695 233.202 536.539 233.202C526.711 234.138 519.301 236.166 514.309 239.286C509.317 242.25 506.821 246.774 506.821 252.858C506.821 258.162 508.459 262.14 511.735 264.792C515.011 267.288 519.301 268.536 524.605 268.536ZM626.51 291V174H659.036V214.482C661.22 201.534 666.056 191.16 673.544 183.36C681.188 175.56 690.47 171.66 701.39 171.66C710.126 171.66 717.77 173.844 724.322 178.212C730.874 182.58 735.944 188.82 739.532 196.932C743.12 204.888 744.914 214.17 744.914 224.778V291H712.154V229.926C711.998 221.502 709.502 214.716 704.666 209.568C699.83 204.42 693.512 201.846 685.712 201.846C680.72 201.846 676.196 203.094 672.14 205.59C668.084 208.086 664.886 211.44 662.546 215.652C660.206 219.864 659.036 224.622 659.036 229.926V291H626.51ZM833.942 293.34C818.654 293.34 807.344 290.064 800.012 283.512C792.68 276.804 789.014 267.054 789.014 254.262V203.25H762.572V174H778.016C782.852 174 786.518 172.752 789.014 170.256C791.51 167.604 792.758 163.938 792.758 159.258V145.92H821.54V174H863.66V203.25H821.54V246.072C821.54 252.156 823.1 256.524 826.22 259.176C829.34 261.828 834.41 263.154 841.43 263.154C847.67 263.154 855.08 262.452 863.66 261.048V290.298C858.98 291.078 853.91 291.78 848.45 292.404C842.99 293.028 838.154 293.34 833.942 293.34ZM892.045 291V174H924.571V291H892.045ZM907.255 160.662L887.833 116.67H929.251L909.595 160.662H907.255ZM962.885 291V124.86H995.411V291H962.885ZM1033.73 291V174H1066.25V291H1033.73ZM1048.94 160.662L1029.51 116.67H1070.93L1051.28 160.662H1048.94ZM1157.45 293.34C1145.44 293.34 1134.59 290.688 1124.92 285.384C1115.41 280.08 1107.92 272.826 1102.46 263.622C1097 254.418 1094.27 244.044 1094.27 232.5C1094.27 220.956 1097 210.582 1102.46 201.378C1107.92 192.174 1115.41 184.92 1124.92 179.616C1134.59 174.312 1145.44 171.66 1157.45 171.66C1168.06 171.66 1177.65 173.844 1186.23 178.212C1194.97 182.424 1201.99 188.352 1207.29 195.996C1212.75 203.484 1215.95 211.83 1216.88 221.034H1184.59C1182.88 215.106 1179.6 210.27 1174.76 206.526C1169.93 202.782 1164.16 200.91 1157.45 200.91C1151.52 200.91 1146.22 202.314 1141.54 205.122C1137.01 207.774 1133.42 211.518 1130.77 216.354C1128.12 221.19 1126.79 226.572 1126.79 232.5C1126.79 238.428 1128.12 243.81 1130.77 248.646C1133.42 253.326 1137.01 257.07 1141.54 259.878C1146.22 262.53 1151.52 263.856 1157.45 263.856C1164.16 263.856 1169.93 261.984 1174.76 258.24C1179.6 254.496 1182.88 249.66 1184.59 243.732H1216.88C1215.95 253.092 1212.75 261.594 1207.29 269.238C1201.99 276.726 1194.97 282.654 1186.23 287.022C1177.65 291.234 1168.06 293.34 1157.45 293.34ZM1244.42 291V174H1276.94V291H1244.42ZM1259.63 160.662L1240.2 116.67H1281.62L1261.97 160.662H1259.63ZM1356.44 293.34C1347.7 293.34 1340.06 291.156 1333.51 286.788C1326.96 282.42 1321.89 276.258 1318.3 268.302C1314.71 260.19 1312.92 250.83 1312.92 240.222V174H1345.68L1345.91 234.84C1345.91 243.42 1348.33 250.284 1353.16 255.432C1358 260.58 1364.32 263.154 1372.12 263.154C1377.11 263.154 1381.63 261.906 1385.69 259.41C1389.75 256.914 1392.94 253.56 1395.28 249.348C1397.62 245.136 1398.79 240.3 1398.79 234.84V174H1431.32V291H1398.79V250.518C1396.61 263.466 1391.7 273.84 1384.05 281.64C1376.56 289.44 1367.36 293.34 1356.44 293.34ZM1519.57 294.276C1501.32 294.276 1486.42 290.142 1474.88 281.874C1463.49 273.606 1457.25 262.062 1456.16 247.242H1489.86C1490.95 253.95 1494.07 259.02 1499.22 262.452C1504.36 265.884 1510.76 267.6 1518.4 267.6C1522.62 267.6 1526.59 267.054 1530.34 265.962C1534.08 264.87 1537.12 263.154 1539.46 260.814C1541.8 258.318 1542.97 255.276 1542.97 251.688C1542.97 248.1 1541.88 245.292 1539.7 243.264C1537.67 241.08 1534.55 239.364 1530.34 238.116C1526.28 236.868 1520.74 235.698 1513.72 234.606C1512.79 234.45 1511.77 234.294 1510.68 234.138C1509.75 233.982 1508.73 233.826 1507.64 233.67C1496.56 232.266 1487.59 230.55 1480.73 228.522C1474.02 226.338 1468.95 223.452 1465.52 219.864C1462.24 216.12 1460.61 211.284 1460.61 205.356C1460.61 198.18 1462.87 192.018 1467.39 186.87C1471.92 181.566 1478.16 177.588 1486.11 174.936C1494.22 172.128 1503.43 170.724 1513.72 170.724C1531.66 170.724 1545.94 174.858 1556.55 183.126C1567.31 191.394 1573.16 203.094 1574.1 218.226H1541.8C1541.34 211.362 1538.68 206.214 1533.85 202.782C1529.01 199.35 1523.08 197.634 1516.06 197.634C1509.82 197.634 1504.44 199.116 1499.92 202.08C1495.39 204.888 1493.13 208.944 1493.13 214.248C1493.13 217.212 1494.07 219.786 1495.94 221.97C1497.97 224.154 1501.01 226.026 1505.07 227.586C1509.12 228.99 1514.43 230.16 1520.98 231.096C1522.07 231.252 1523.16 231.408 1524.25 231.564C1525.5 231.72 1526.75 231.876 1528 232.032C1528.62 232.188 1529.25 232.266 1529.87 232.266C1530.49 232.266 1531.12 232.344 1531.74 232.5C1541.57 233.748 1549.6 235.542 1555.84 237.882C1562.08 240.222 1566.69 243.264 1569.65 247.008C1572.61 250.596 1574.1 255.198 1574.1 260.814C1574.1 267.834 1571.76 273.84 1567.08 278.832C1562.4 283.824 1555.92 287.646 1547.65 290.298C1539.39 292.95 1530.03 294.276 1519.57 294.276Z" fill="black"/>
<defs>
<clipPath id="clip0_411_3">
<rect width="252.057" height="252.057" fill="white" transform="matrix(-0.258819 -0.965926 -0.965926 0.258819 1138.34 317.904)"/>
</clipPath>
</defs>
</svg>

        </a>
      </div>

      <!-- end logo -->

      <!-- search bar -->
      <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
        <div class="inline-block">
          <div class="inline-flex items-center max-w-full">
            <button
              class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1"
              type="button"
            >
              <div class="block flex-grow flex-shrink overflow-hidden">
                Start your search
              </div>
              <div
                class="flex items-center justify-center relative  h-8 w-8 rounded-full"
              >
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style="
                                display: block;
                                fill: none;
                                height: 12px;
                                width: 12px;
                                stroke: currentcolor;
                                stroke-width: 5.33333;
                                overflow: visible;
                            "
                >
                  <g fill="none">
                    <path
                      d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                    ></path>
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <!-- end search bar -->
    </nav>
    <!--Nav-->
    <!-- <nav id="header" class="w-full z-30 top-0 py-1">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"
      >
        <label for="menu-toggle" class="cursor-pointer md:hidden block">
          <svg
            class="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div
          class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul
              class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            >
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >About</a
                >
              </li>
              
              
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Contatti</a
                >
              </li>
            </ul>
          </nav>
        </div>

        <div class="order-1 md:order-2">
          <a
            class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="#"
          >
            <img ngSrc="./logo/chiantilicius.svg" width="400" height="116" priority>
          </a>
        </div>

        <div class="order-2 md:order-3 flex items-center" id="nav-content">
        <ul
              class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"
            >
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  class="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                  href="#"
                  >Ricette</a
                >
              </li>
              
            </ul>
        </div>
      </div>
    </nav> -->
  `,
  styles: ``,
})
export class HeaderComponent {}
