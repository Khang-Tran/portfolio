import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  z-index: 1;
  padding: 3.5rem;
`;

const Image = styled.svg`
  height: 5rem;
  width: 5rem;
  fill: ${props => props.theme.secondary.main};
`;

const LogoBrand = () => (
    <Container>
        <Image version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 799.000000 799.000000'>
            <path
                d='M3780 7939 c-1814 -96 -3335 -1432 -3664 -3219 -49 -266 -60 -404 -60 -720 0 -305 10 -442 54 -695 19 -107 70 -328 91 -392 l11 -33 195 0 c166 0 194 2 190 14 -18 46 -81 289 -101 391 -203 1001 28 2034 636 2847 499 665 1206 1137 2000 1333 327 81 610 111 958 102 246 -6 397 -22 622 -68 451 -91 898 -280 1288 -543 349 -236 714 -599 944 -938 l60 -88 219 0 219 0 -27 48 c-52 90 -197 305 -273 406 -171 226 -429 494 -647 671 -585 477 -1270 768 -2035 864 -89 11 -439 32 -500 29 -19 0 -100 -4 -180 -9z'
                transform='matrix(.1 0 0 -.1 0 799)'/>
            <path
                d='M2628 6477 c-301 -89 -549 -165 -552 -168 -4 -4 -637 -2958 -772 -3601 l-6 -28 -421 -2 -421 -3 -38 -185 c-20 -102 -37 -193 -38 -203 0 -16 70 -17 1367 -15 l1367 3 38 185 c20 102 37 193 38 203 0 16 -26 17 -415 17 -302 0 -415 3 -415 11 0 7 83 408 186 893 177 842 186 882 212 903 69 57 184 135 252 172 175 94 339 97 426 6 65 -67 79 -121 78 -300 0 -142 -3 -162 -52 -390 -60 -276 -77 -413 -68 -575 6 -127 23 -212 62 -309 110 -278 370 -438 746 -459 l119 -7 -670 -465 c-369 -256 -671 -468 -671 -472 0 -5 163 -8 363 -8 l362 1 695 548 c382 302 696 548 696 547 2 -1 -289 -1347 -301 -1393 -4 -16 -1 -23 10 -23 14 0 1106 319 1114 326 1 1 177 819 390 1816 l386 1813 421 3 421 2 37 188 c21 103 39 195 42 205 5 16 -65 17 -1365 17 -754 0 -1371 -1 -1371 -3 0 -2 -18 -93 -40 -202 -22 -109 -40 -200 -40 -202 0 -2 189 -3 421 -3 333 0 420 -3 416 -12 -2 -7 -86 -404 -186 -883 -118 -559 -189 -879 -200 -894 -23 -32 -189 -152 -271 -195 -87 -46 -171 -69 -250 -69 -120 1 -187 47 -231 160 -20 50 -23 76 -23 193 0 142 2 155 77 490 41 185 41 185 41 400 0 192 -2 224 -22 295 -99 360 -375 546 -841 567 l-54 3 654 454 c360 249 661 460 669 467 12 12 -41 14 -352 14 l-366 0 -687 -541 c-378 -297 -689 -539 -691 -536 -3 2 61 308 141 678 81 371 149 686 152 702 4 19 2 27 -8 26 -8 0 -260 -73 -561 -162z'
                transform='matrix(.1 0 0 -.1 0 799)'/>
            <path
                d='M7406 5073 c36 -114 94 -358 113 -473 33 -197 41 -290 48 -505 22 -736 -183 -1450 -592 -2065 -606 -911 -1552 -1479 -2645 -1590 -156 -16 -531 -13 -701 5 -466 49 -932 193 -1334 412 -155 84 -400 248 -540 359 -142 114 -427 399 -539 539 -48 61 -119 156 -157 212 l-70 103 -215 0 c-117 0 -214 -4 -214 -9 0 -14 120 -209 195 -316 245 -351 610 -720 954 -964 1188 -843 2758 -964 4054 -314 394 197 826 518 1104 821 588 639 930 1359 1044 2197 26 191 37 628 20 830 -20 239 -69 526 -124 720 l-23 80 -196 3 -197 2 15 -47z'
                transform='matrix(.1 0 0 -.1 0 799)'/>
        </Image>
    </Container>
);

export default LogoBrand;