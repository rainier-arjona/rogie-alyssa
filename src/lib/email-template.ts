export function generateWeddingInvitationEmail(
  name: string,
  groomName: string,
  brideName: string,
  weddingDate: string
): string {
  const petal = (size: number, color: string) =>
    `<svg width="${size}" height="${size * 1.3}" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C10 0 20 8 20 16C20 21.5 15.5 26 10 26C4.5 26 0 21.5 0 16C0 8 10 0 10 0Z" fill="${color}"/>
    </svg>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600;700&display=swap');
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:'Cormorant Garamond', Georgia, serif;
  background: linear-gradient(180deg, #d8e6f1 0%, #eef5fb 55%, #f9fcff 100%);
  padding:28px 18px;
  color:#314860;
}

.email-container{
  position:relative;
  max-width:700px;
  margin:auto;
  background:#ebf4fc;
  border-radius:36px;
  overflow:hidden;
  border:1px solid rgba(123,156,185,0.28);
  box-shadow:0 24px 60px rgba(74,110,147,0.12);
}

/* STATIC PETALS */

.petal{
  position:absolute;
  opacity:.45;
  z-index:1;
}

/* HEADER */

.email-header{
  position:relative;
  overflow:hidden;
  text-align:center;

  padding:78px 30px 56px;

  background: linear-gradient(180deg, #d7e5f2 0%, #edf5fb 100%);
}

.email-header:before{
  content:"";
  position:absolute;
  left:50%;
  top:-140px;
  transform:translateX(-50%);

  width:520px;
  height:520px;

  background: radial-gradient(circle, rgba(255,255,255,0.88), transparent 72%);
}

.email-header:after{
  content:"";
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
}

.hero-image-wrap{
  position:relative;
  margin:0 auto 24px;
  max-width:640px;
  border-radius:28px;
  overflow:hidden;
  box-shadow:0 18px 40px rgba(75,112,144,0.08);
}

.hero-image{
  width:100%;
  display:block;
  height:auto;
  object-fit:cover;
}

.header-content{
  position:relative;
  z-index:5;
}

.corner{
  position:absolute;
  font-size:120px;
  opacity:.18;
  color:#7aa9dc;
}

.corner-left{
  top:-20px;
  left:-15px;
}

.corner-right{
  top:-20px;
  right:-15px;
}

.monogram{
  font-family:'Cormorant Garamond', Georgia, serif;
  font-size:88px;
  font-weight:400;
  color:#8ea9cc;
  line-height:1;
  letter-spacing:2px;
}

.monogram .heart{
  color:#aab6c5;
  font-size:64px;
  margin:0 10px;
}

.header-subtitle{
  margin-top:18px;
  font-family:'Segoe UI',sans-serif;
  font-size:11px;
  letter-spacing:5px;
  text-transform:uppercase;
  color:#7f8895;
}

.header-title{
  margin-top:22px;
  font-family:'Great Vibes', cursive, 'Cormorant Garamond', Georgia, serif;
  font-size:58px;
  font-weight:600;
  letter-spacing:1px;
  color:#274464;
  text-transform:uppercase;
}

.header-script{
  margin-top:10px;
  font-family:'Great Vibes', cursive, 'Cormorant Garamond', Georgia, serif;
  font-size:28px;
  font-style:italic;
  color:#5d728e;
}

.mini-divider{
  margin-top:20px;
  color:#8ea9cc;
  letter-spacing:4px;
}

/* BODY */

.email-body{
  position:relative;
  z-index:5;
  padding:45px;
}

.greeting{
  font-size:22px;
  color:#24466f;
  margin-bottom:20px;
}

.greeting strong{
  font-style:italic;
}

.invitation-text{
  font-family:'Segoe UI',sans-serif;
  color:#5c6f86;
  font-size:15px;
  line-height:1.9;
  margin:20px 0;
}

/* COUPLE CARD */

.couple-names{
  position:relative;
  margin:40px 0;
  padding:45px 30px;
  border-radius:20px;
  background:
    linear-gradient(
      180deg,
      #f8fbff,
      #edf5fc
    );

  border:1px solid #e1ebf5;
  box-shadow:
    0 8px 20px rgba(126,167,215,.08);

  text-align:center;
}

.name{
  display:block;
  font-size:48px;
  color:#7297c5;
  font-style:normal;
}

.ampersand{
  display:block;
  margin:14px 0;
  font-size:26px;
  font-style:italic;
  color:#9099a6;
}

/* DETAILS */

.event-details{
  background:#f7faff;
  border:1px solid #e3ebf5;
  border-radius:18px;
  padding:30px;
  margin:40px 0;
  box-shadow:
    0 5px 15px rgba(126,167,215,.05);
}

.details-grid{
  display:flex;
  justify-content:space-around;
  align-items:center;
  text-align:center;
}

.details-item{
  flex:1;
}

.details-separator{
  width:1px;
  height:60px;
  background:#dfe7f2;
}

.details-icon{
  font-size:24px;
  margin-bottom:10px;
}

.details-value{
  color:#6f88a9;
  font-size:16px;
}

/* BUTTON */

.cta-button{
  display:inline-block;
  padding:16px 46px;

  background: linear-gradient(180deg, #5f8bc5, #3b6295);

  color:#fff;
  text-decoration:none;
  border-radius:999px;

  font-family:'Segoe UI',sans-serif;
  font-size:12px;
  letter-spacing:0.15em;
  text-transform:uppercase;

  box-shadow: 0 12px 28px rgba(36,82,129,.2);
}

.floating-petal{
  position:absolute;
  width:22px;
  height:30px;

  background:
    linear-gradient(
      145deg,
      #ffffff,
      #dfeefb
    );

  border-radius:
    60% 40%
    70% 30% /
    40% 60%
    40% 60%;

  opacity:.75;

  box-shadow:
    0 4px 10px rgba(0,0,0,.06);

  z-index:2;
}

.p1{top:90px;left:25px;transform:rotate(25deg);}
.p2{top:150px;right:30px;transform:rotate(-20deg);}
.p3{top:430px;left:30px;transform:rotate(40deg);}
.p4{top:620px;right:40px;transform:rotate(-35deg);}
.p5{bottom:320px;left:60px;transform:rotate(30deg);}
.p6{bottom:220px;right:50px;transform:rotate(-40deg);}
.p7{bottom:100px;left:30px;transform:rotate(50deg);}
.p8{bottom:80px;right:40px;transform:rotate(-60deg);}

/* CLOSING */

.divider{
  height:1px;
  background:#dbeaf7;
  margin:40px 0 30px;
}

.closing-text{
  text-align:center;

  font-family:'Segoe UI',sans-serif;

  color:#5c6f86;
  line-height:1.9;
}

.signature{
  margin-top:25px;

  text-align:center;

  font-family:'Great Vibes', cursive, Georgia, serif;
  font-size:34px;
  font-style:normal;

  color:#2f67ae;
}

.signature-subtitle{
  margin-top:12px;

  font-family:'Segoe UI',sans-serif;

  color:#5f88b6;

  font-size:11px;
  letter-spacing:3px;
  text-transform:uppercase;
}

/* FOOTER */

.email-footer{
  position:relative;

  padding:30px;

  text-align:center;

  background:#f6fbff;
  border-top:1px solid #dbeaf7;
}

.footer-text{
  font-family:'Segoe UI',sans-serif;
  font-size:11px;
  color:#7b8fa6;
  line-height:1.8;
}

@media(max-width:600px){

  .email-body{
    padding:25px;
  }

  .header-title{
    font-size:48px;
  }

  .monogram{
    font-size:62px;
  }

  .name{
    font-size:30px;
  }
}
</style>
</head>

<body>



<div class="email-container">

  <!-- STATIC PETALS -->

  <div class="petal" style="top:80px;left:20px;transform:rotate(25deg)">
    ${petal(18,"#bdd7f3")}
  </div>

  <div class="petal" style="top:160px;right:25px;transform:rotate(-35deg)">
    ${petal(20,"#d2e4f7")}
  </div>

  <div class="petal" style="top:420px;left:35px;transform:rotate(50deg)">
    ${petal(16,"#bdd7f3")}
  </div>

  <div class="petal" style="top:620px;right:60px;transform:rotate(-15deg)">
    ${petal(22,"#d2e4f7")}
  </div>

  <div class="petal" style="bottom:200px;left:80px;transform:rotate(30deg)">
    ${petal(20,"#c2d7ee")}
  </div>

  <div class="petal" style="bottom:80px;right:50px;transform:rotate(-45deg)">
    ${petal(24,"#d2e4f7")}
  </div>

  <!-- HEADER -->

  <div class="email-header">


    <div class="header-content">

  <div class="monogram">
    R<span class="heart">♡</span>A
  </div>

  <div class="header-subtitle">
    TOGETHER WITH JOY
  </div>

  <div class="header-title">
    YOU'RE INVITED
  </div>

  <div class="header-script">
    to our wedding
  </div>

  <div class="mini-divider">
    ─── ♥ ───
  </div>
</div>

  <!-- BODY -->

  <div class="email-body">

    <div class="greeting">
      Dear <strong>${name}</strong>,
    </div>

    <p class="invitation-text">
      With heartfelt joy and gratitude, we invite you
      to witness and celebrate the beginning of our forever.
    </p>


    <p class="invitation-text">
      As we exchange vows and begin our new journey together,
      your presence would mean the world to us.
      We would be honored to celebrate this special day
      surrounded by the people we cherish most.
    </p>

    <div class="event-details">

      <h3>
        Wedding Details
      </h3>

      <div class="detail-row">
        ${weddingDate} • 3:30 PM
      </div>

      <div class="detail-row muted">
        Venue details will be shared shortly
      </div>

    </div>

    <p class="invitation-text" style="text-align:center;">
      Please visit our wedding website to RSVP
      and share your meal preferences.
    </p>

    <div class="cta-wrap">

      <center><a
        href="https://rogiealyssawedding.vercel.app/"
        class="cta-button">
        RSVP & VIEW DETAILS
      </a></center>

    </div>

    <div class="divider"></div>

    <p class="closing-text">
      Thank you for being part of our lives and
      for the love you've shown us.<br>
      We cannot wait to celebrate this unforgettable
      moment with you.
    </p>

    <div class="signature">

      With Love, ♡

      <div class="signature-subtitle">
        ${groomName} &amp; ${brideName}
      </div>

    </div>

  </div>

  <!-- FOOTER -->

  <div class="email-footer">

    <div class="footer-text">
      Wedding Date • ${weddingDate}
    </div>

    <div class="footer-text">
      This is an automated invitation — please don't reply
      to this email.<br>
      For inquiries, please visit our wedding website.
    </div>

  </div>

</div>

</body>
</html>
`;
}