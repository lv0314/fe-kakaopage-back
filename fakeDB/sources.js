import { renderPageInit } from "../scripts/views/render.js"

export const dummy = {
    slideBannerMainImg: [
        // 'https://dn-img-page.kakao.com/download/resource?kid=UR3fh/hyF29PgleL/7fFerNikdZewZPxreBIH80',
    //     'https://dn-img-page.kakao.com/download/resource?kid=d4euUn/hyZ8ANjBph/bQCJXK9YvC6oDTqvXp6aV1',
    //     'https://dn-img-page.kakao.com/download/resource?kid=cLnYFA/hzmU3TywO7/9jccDOSIGBx0m3YopMIyfK',
    //     'https://dn-img-page.kakao.com/download/resource?kid=smwym/hzp2hnos6O/CXrkxKFx3dC74VA3ECGU80',
    //     'https://dn-img-page.kakao.com/download/resource?kid=ce21It/hyF23tXM8m/0wARwb5At6jjKwlfj3Kjo1',
    //     'https://dn-img-page.kakao.com/download/resource?kid=bTBWMG/hzp2ifulZF/YkpvjY3a5Dl89wX9RtnxDk',
    //     'https://dn-img-page.kakao.com/download/resource?kid=cfAzEK/hzaccWdy4A/UArh28KEq6qTNpBMqH1lbK',
    //     'https://dn-img-page.kakao.com/download/resource?kid=bDvkGC/hzacbW2cAQ/ZS1Z5mX4Mpk9yN6A82B8q0',
    //     'https://dn-img-page.kakao.com/download/resource?kid=bjdREm/hzb7AH9Pj6/ARsEC3Y67KSTHnaEUAmLxk',
    //     'https://dn-img-page.kakao.com/download/resource?kid=b1G6sz/hzp2e5hBDs/rZxJLKfnt79jknCnuLJ83k'
    ],
    slideBannerEventImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=FDCfL/hzp2jS2BJL/R4hKEhngW4V6MtJXwj67Yk',
        'https://dn-img-page.kakao.com/download/resource?kid=EsrIV/hzp2ec8PVX/gLwWwuutLZuY9dnMopZIZK',
        'https://dn-img-page.kakao.com/download/resource?kid=ivxaO/hzp2fQBRq4/35kpFTrknkGfY3r3rFr8yk',
        'https://dn-img-page.kakao.com/download/resource?kid=BSG53/hzp2eYpmdR/ghRzgHEoKaHxDHNACn2x50',
        'https://dn-img-page.kakao.com/download/resource?kid=zjKSo/hzhOlrWnde/l1Xf4DULjd2sXPrkJUs4n0',
        'https://dn-img-page.kakao.com/download/resource?kid=dEO9B5/hy41LvwHjX/n6cnUyysXJRVADASUNQoRK',
        'https://dn-img-page.kakao.com/download/resource?kid=zOn2v/hzp2gB1cua/HXyQdAEKGtHLq8TEK4TOD1',
        'https://dn-img-page.kakao.com/download/resource?kid=bdJ4V5/hzp2mvsVjf/I6ejiK7wt1s8ZBzOH4MDE1'
    ],
    contentFormImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=JKbkM/hzhOksSPjb/Zk4kiHai3IGS77dRy1iO1K&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=rOfMN/hyEdeEtJFz/63XlMqYRjhokso828Ki6k0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=biG4Nt/hzb7sXLBzm/Spy2JkLBLu3zUwNl9TaznK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bJfSQM/hzhOey4Ce1/vdfn3bixVAOmkJYJOklf41&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=nqcae/hy41PrwQNy/owLlWx5cXQR4NciK7kjcc1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=b7H7Jx/hzmU3lmHWf/PYTUMe8KmuFYbvLETjjfOk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=6WrkN/hzhOi9Q3rx/K9EcOe49J8tPsqkcZY9KB1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=c7aN0E/hy41NmZFbx/XpuVPoG811XwKto4vKtxYK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=S1kxU/hyEdlYjRrz/e1OeuUKOpw07xau22O8N6k&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=wIHwB/hzhOmRyx4s/c720DwZNXp99QzWbKrljIK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cGwDCm/hyCvhWzqpw/TtfsO1231JbdiZNHSRUiA1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bpRgci/hySXGGplRY/p97gqWpRXQInhSjmBhHFzK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=uEMMz/hzhOiaEalb/tpjpz8jAeFLhWj7kyT5KM1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bZOddW/hzb7yQmW4F/fZL5FTxHoJlyESZc8wNqJk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cLuWfT/hy41HNpYKh/LQhXMHGiSIH6vhAdcw8KO0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=uXf0T/hyATwn2bIQ/wu9vXxIJNcKfXg1CdiB9f1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=dnaDI9/hyZ8zmRkzZ/IuODBcVAT8AdeMtvKz7QYK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=biTSyb/hzb7siJ0hX/F87QkXm53FZ1kpjqlNiECK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=mQPAt/hzmU03KQ6N/P8uoHEf541zsMLkCa0KeRk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=btCIvo/hy41H0WSo2/1yZOixkEWANlAOIbWkpwNK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=Lp9MQ/hy41PdPSjB/eLV0wj95ppkiT1NGq8oUsk&filename=th2'
    ],
    lineWithImgSmall: [
        'https://dn-img-page.kakao.com/download/resource?kid=DZ3bi/hzp2imj1Xi/7KitYvecmoxVseWA4soFc1',
        'https://dn-img-page.kakao.com/download/resource?kid=7DaO0/hzp2fb3EM1/dt38Y3BSOvDTZnHtyoiojK',
    ],
    rankingImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=eVtdO/hzmU2tEBKW/VuaxFpaYkAsyGg2tUoNJKk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cKb15m/hzb7xx5Gbu/swDYCNVU9nElhCRzTWJrK0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cR1QGX/hzmU0WFP2T/kUMEn3fFoyhP9rFxck2mkK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=imfCM/hzmU0W1V6o/0q5JUn4tQIXrhPV98ng4n0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=NFDyw/hzb7v7UXak/sIRlf04F2kfYD9FnlKPry0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=b7NjCA/hySXG7oUua/N0VgMZrZg7M9AMDxZshZdk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=b8bQoB/hzhOlFujAB/mEsg3TsnjXFFDd297IF8Q0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=29vrL/hyEdlQBeZj/1OcnkAyaTuqaAyDiL9KRjk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=B4mOE/hzhOhhWg1W/MeesVKdFSmLgZLMFAskmjk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cPi734/hzmU12xWda/jeRyZxCcExbf3unx7OmSQk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=6IPnH/hzhOmXFiUj/0V6UGF1R1EbSpgqSVkost0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bpqJJB/hzmU12xSjb/c0qv02FSZXQ3MzJciRI8H1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=nIn5s/hyQ9RQFSsC/0POHvWllkzo1oquy2bsCO1&filename=th1',
        'https://dn-img-page.kakao.com/download/resource?kid=XwBVB/hySXGzYkv0/bQlUCjHrj7947lHlbwJLE1&filename=th1',
        'https://dn-img-page.kakao.com/download/resource?kid=ME0bf/hynFXkURpN/OfagfhB4FnFdmeqzPx8Ssk&filename=th1',
        'https://dn-img-page.kakao.com/download/resource?kid=blr3gG/hzp2hAWoZQ/SV4iMZjKcWXhnjFpDz2yu0&filename=th1'
    ],
    slideBannerMiddleImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=FIep1/hzmU3sGhNi/ltEgI1VyEMT2RwQZYdXhqk',
        'https://dn-img-page.kakao.com/download/resource?kid=BU9ZW/hzp2iNnsOU/i2lOsOpt63Kl9ExkIAsggK',
        'https://dn-img-page.kakao.com/download/resource?kid=deu6dT/hzp2nVsO2d/FYkdB8uFGaSppYpxkP4Gck',
        'https://dn-img-page.kakao.com/download/resource?kid=WkPMw/hzp2jMh8dB/hSNgrE6tgGUutevlvEOCz0',
        'https://dn-img-page.kakao.com/download/resource?kid=KQcuW/hzp2hVeL9w/OgBWiGLmA7M0VU4lwxdTT1',
        'https://dn-img-page.kakao.com/download/resource?kid=ciQHuk/hzp2hgCQiw/zbEABVG9t2KcZkdNxSdvr0',
        'https://dn-img-page.kakao.com/download/resource?kid=jySqs/hzmU1hjQwo/MUcpK0XEI9k4AfWbJBfkZk',
        'https://dn-img-page.kakao.com/download/resource?kid=dX2Wj/hzp2eEb0Bc/26QApEwlquK7YRkZnw4lOk'
    ],
    horizontalImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=Lqv1U/hzhOd1NWTA/iI8OJYcOCMzIZtulQSY4Gk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bKyTZX/hyEdkR97Bz/josCiw8fKk2kZJKD0CenT0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=n9zrp/hyzcBLbo6s/D3HsL9kkQCwBYFb31SI27K&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cgamBJ/hycuoHlHST/RlA1TKySoY1kaSB9ZOVyzk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=dtHS0v/hyVkLZtZaH/XygjiriutwVWr87hKSBOUk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=XPune/hzb7Ag2Puk/RInI7dO6USs60REkAZxKkk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=DnqFt/hzb7v0Yhtd/ictYRRak2eLs3Cc5dLWZc0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=ifF48/hyqDxJ54lL/hqG59HgTXyeR5L9yyfvUnk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=qZ5dx/hzhOm44fzp/j1I0EA95lpnKf06kkF7mcK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=JLajN/hyQ9O7Pe5x/CK9jSP7jytB3pVUQkOgvZk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=ifkdc/hzb7rdtgRc/zJaDRpbQ2MmgETH81ADuRk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=pwSll/hyhBhbSxfI/IYAsCMzxXpLoQr79vU4nQ1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=gtJX7/hzp2iT0nGz/tdKTC9UgWf95Am2uYamtz0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=vEyG7/hyhBfMtftz/BBoQcHT6SsK8oMIGfJD7Mk&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=peTWg/hywgFcc5cS/OtxAlbDfLyqFwlyKgk22ok&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cHqDaG/hyVkJ1yYCR/rjQr2OBiVPgrI0620Btork&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bA97DA/hzacbQSBbn/5nAfrTzmTZf5xgKgfVQTK0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=b1pW7P/hyxJJjHDE3/v2Hxkuj8gxYkJeCvO8ckeK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=cvtjxP/hzachjsp30/HzN6tFGtGbBqLR4GfE0x8k&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=eZBfA/hyQ9Pyy9Nw/kN4cM3u7gufohflp14kDnK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=byh0Bg/hzp2kxyRvz/03RtAxYWB8ftWwZhxQQ9fK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=IkMr4/hyLjg3bj0E/6iez7kQA5ljWcCYhkHiCs0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=ex5GdH/hzace0RJpX/s3yh1TX712ZKndage7R3vK&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=bb0V9x/hyZ8wqFa31/3pbLYhXDKBfj8xhcI47kk1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=jJa9H/hy41O7M1W1/dyDeJd7oUcteCu6RfQUXR1&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=das45o/hy41GgZnnB/wy12ZnMZUzZyOUoH0nJcR0&filename=th2',
        'https://dn-img-page.kakao.com/download/resource?kid=Wbb7K/hzp2jlalm4/fKVTu3iunR6KFa5XSYuuD1&filename=th2'
    ],
    contentFormBiggerImg: [
        'https://dn-img-page.kakao.com/download/resource?kid=cv7AZa/hzhOd1zd7e/Exth5wgSMJEk9Nmfz7pKNk&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=SCBWN/hzhOf5IxgW/mvMKDAEiJ09xifW9xfP210&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=wiZ5e/hzaceAgNNM/sLnnkazva9V6sye2I0mMD0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=waWKz/hzhOjgxPWr/utKLJIx9zLlGXMfeilyv9K&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bOS9jC/hzacg5DM9o/D8Rv3mQVXLGCoqG8KrxdGK&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bBk1T1/hy41JLWZCk/9hM2vGskojQnDORoNzbvI0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=DRaQo/hyZ8w5cVbW/Xzk4xMeVUCORt7Ac69aEC1&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=7hkDP/hzhOfdPDN1/2if20hFai142KmRuRBumj0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=cwY759/hzhOjVcYA7/REGK2DJYlnsgYYlrnCm8ZK&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=zCs9a/hzhOfY7gN2/QA44lo3PEfkETFGP0T4480&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bCCZSL/hyCvno3hBb/yz6D3k5UcySpYexf0gKjTK&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bq8fM6/hzhOd1j4sg/ymp1EdDs8TAWy1B6XT68Ik&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=esLxgD/hzp2isYO0n/uy9UUuoS6aRRyOzhbk8yRK&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=c3UUSU/hzhOn3p3QG/74FTGzobbtcdATfhSgbjbk&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=cHPLK5/hzacd1W9Wo/lA2ENJJOoT71CUfbSp5YR0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=4lMOl/hzacg5lGjH/3D7urdnZPBsyHjmmKfYkI0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=brQl3W/hzb7wd8Ixa/kTKBt10xtN8ehZauPoozL0&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bFspsZ/hyZ8tzFuX5/l5RCT67tWuThVqoSfH1WEk&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=bJt91D/hyZ8z1zXIx/0Ny8bKFygLWKuiJWoqxV30&filename=th3',
        'https://dn-img-page.kakao.com/download/resource?kid=SKYCW/hzp2fwcBFb/dWOf9IIkKZtdQxlLTlwYwk&filename=th3'
    ],
    contentName: [
        '나 혼자 레벨업', '궁귀검신', '악녀가 사랑할 때', '카니발 베이비', '따봉으로 레벨업', '24분의 1 로맨스',
        '신마경천기', '의원귀환', '마탄의 사수', '도굴왕', '던전 리셋', '궁귀검신', '에스티오', '로드 오브 머니',
        '인긴샂;아', '엔젤릭 레이디', '프로야구생존기', '마족의 계약', '빅 라이프', '마른 가지의 라가', '불사무적',
        '나는 이 집 아이', '묵향 다크레이디', '뒤끝작렬', '롱리브더킹', '더 라이브', '녹음의 관', '그녀와 야수',
        '신마', '다시 한번 아이돌', '요신기', '궁', '독고3', '막내 황녀님', '인소의 법칙', '악역도 귀찮아서',
        '닥터 최태수', '1레벨 플레이어', '낭선기환담', 'FFF급 관심용사', '사내 맞선', '궁에 숨은 꽃',
        '연록흔', '화홍', '치트라', '두 번 사는 랭커', '베아트리체', '프로젝트 S', '일상다정사', '화산전쟁',
        '레이디 베이비', '제독의 괴물아내', '정령왕 엘퀴네스', '네 이웃의 취향', '여왕님 안 돼요!', '이그레트'
    ],
    contentDesc: [
        '대마법사 샬롯의 제자들이 이상하다?', '모두 내 손으로 키우고 말겠어!', '다섯 남자 중 당신의 취향은?',
        '기적처럼 찾아온 두 번째 삶', '누가 아군이고, 누가 적인가.', '게임 몬스터의 랭커들을 향한 복수!',
        '천재 마법사의 몰락과 대재앙', '통통녀의 근육미녀 도전기!', '엄마가 돌아왔다!!', '여긴 어디? 너는 누구?',
        '자살 아니야. 내가 죽였어', '따봉으로 강해지는 최강헌터 엄지척', '임무를 위한 가짜 가족 탄생!',
        '작다고 얕보지 마시길!', '인형이 살아있다..?', '용의 기운을 되찾아라!', '강자들에게 도전장을 내밀다!',
        '퀘스트로 합격은 문제 없겠는데?', '이건..내 기억이 아니야', '은혜를 갚기 위한 냥냥분투기', '혼밥의 시대가 왔다!',
        '최고의 셰프가 되는 건 나야!', '100일 내에 당신은 살해됩니다', '이번 생은 오직 성공뿐이다!', '윤회의 끝',
        '권력과 사랑의 이중주!', '반갑지 않은 연, 그 후의 인연', '그의 마음을 얻기 위한 도전!', '그날 밤 아기가 생겼다고?',
        '옛 원수를 경호하게 되다?', '만 번의 죽음, 그리고 피의 복수', '무도의 최고봉이 되어라!', '1 뻘짓, 1 포인트 획득!?',
        '강한 자만 살아남는다!', '내 안의 방아쇠를 당겨라!', '오늘부터 후계 수업을 시작하지', '딸바보가 된 황제'
    ],
    contentWriter: [
        '산양', '미래나비', '리노', '윤슬', '비아', '달슬', '도바', '과앤', '테스', '류송', '윤쓰', '다울',
        '앤트스튜디오', '쓰리비투에스', '전율', '빅라이트', '엔도 타츠야', '아카이 히가사', '소울풍', 'Somato',
        'TONY', '철무장미', '제양', '안정혁', '웹작툰가', '박지설', '할리차', '아사노 린', '우미버드',
        '송', '블랙M', '김광수', '고사리박사', '미울', '아흠', '이굴림', '버선버섯', '지나', '유한려', 'SLL',
        '팀오리온', '시녹', '레드피치 스튜디오', '파카', '춘우', '마릴린', '이품', '골지', '밥꾹', '래죵'
    ],
    contentGenre: [
    '소년', '드라마', '로맨스', '로판', '액션무협', 'BL'
    ],
    contentDays: [
    '월', '화', '수', '목', '금', '토', '일'
    ]
}

export function getData(url){
    const promise = fetch(url)
    .then(res => res.json())
    .then(json => { dummy.slideBannerMainImg = Object.values(json.slideBannerMainImg)})
    .then(() => renderPageInit())
}