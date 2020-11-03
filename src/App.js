import products from "./products";
const styles = {
  textUnderImgThePrice: {
    textAlign: "center",
    fontFamily: "monospace",
    color: "#8B4513",
  },

  textUnderImgTheName: {
    borderBottomStyle: "ridge",
    textAlign: "center",
    fontFamily: "monospace",
    color: "#8B4513",
    paddingBottom: "5px",
  },

  textBeforeTheLineHeader: {
    textAlign: "center",
    fontWeight: "100",
    paddingBottom: "10px",
    fontFamily: "monospace",
    borderBottomStyle: "ridge",
    borderBottomColor: "#8B4513",
    color: "#bc5a45",
  },

  textHeader: {
    fontFamily: "monospace",
    color: "#bc5a45",
    fontWeight: "100",
    fontSize: "32px",
    marginLeft: "730px",
  },

  imgLogo: {
    width: "300px",
    height: "300px",
    marginLeft: "715px",
    marginBottom: "10px",
  },

  itemImg: {
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    height: "300px",
    marginLeft: "50px",
  },

  totalPicStyle: {
    alignItem: "center",
    justifyContent: "center",
    display: "flex",
  },
};

function App() {
  const productList = products.map((product) => (
    <div>
      <img style={styles.itemImg} src={product.img} alt={product.name} />
      <p style={styles.textUnderImgTheName}>{product.name}</p>
      <p style={styles.textUnderImgThePrice}>{product.price}</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 style={styles.textHeader}>Vogue Furniture</h1>
        <h2 style={styles.textBeforeTheLineHeader}>
          "Explore luxury furniture and accessories from the world's finest
          brands and artisans"
        </h2>
        <img
          style={styles.imgLogo}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA4VBMVEX//////v////2KeWmKeWeJemft7eqEeGiKeGT///r9+vjr59+LeWuDc2WBd2GJfGSAc1+Ec13MyMDDvLael4eCdVmKeGyIfWn8+fOoopbU08qKgHXLxrry8/KAalWShXmuopqdlIyCbl7g4tx6blG0qKiAalF4bVi8s6izqZze2tORiHXW0cqUi4CSg3KGf2PPy8d7bGCfmIKShW1+aV6+tK2UkYLV09KyqaLQx8e9tLGqppWHdFp/dlWNc2F/aF+jjIGIh3Td39WXjYezt6Lr5uiQg3zc0MSqmY1yZlfw8eXKEDsdAAATLUlEQVR4nO2dCXuburaGhSSQwBCETWwcxxPprUe8k3a79W5zenfT2540//8H3SXAzE7tJB3sh69P24RB0ouEloYlgVCtWrVq1apVq1atWrVq1apVq1atWrVq1apVq1atWrVq1apVq9afKKzsOKEo8X8Yw1V411XpKfgRrq24EEdhZc/IQBX5B4LPXQnBFYPYFfWe2pl0rHuapj14e4Svew8gT98VHs79F0rBevgrPF9cvnLPJGZlrKfr9UyrOHM126xn16VA+9fdhZgIx3Herd8b+iNx9N9vgkmoxeafqhhA8+6HD9NWHsXortfrrlZIf38zLepjaw9A5PUsn00uKs5cTrh13i0c1GYrQamqmqbZ5mKyaum7AtabK9+xQ6mqKlZTr6rUX7zy22efsyg6MhwmhGgU8q0hnNvbWycVv/1PMXVVwkZAqC2WFaVgxil11tkjCrronMPlnBMOMomq3oz7qFxa4Nd5YBHTpLYNSaGUc8qCeUWhWgpC+KJAeKaqxGoUrtQYNXn7E4jHuv3URbuqimxaRpBkq1UReZerqr/MHbq2KETD/WG3O+r2fEI5tQIvrBxyUuCJEwJ8ouOORuOeRVRKWO+ughBOcZYtCFBKz3hEmEs+EBKbWL7vW5GE/7/7E7JuOQ9xAIWRzrOHHhj51Kbifi6rDqwshwKepOPqZUIjODMJUc8uZXWEjWaPQSay1UMploMIVVtcN+bzRqT51XzHy10gXFtAOK4mpFlCBf1rqrZ93pR2QtbnqD9mDF6xZqmmw5e8bZqEvQ8vVeTbfivL/KwUfzWhXU3IbPF1D6YiYVNAVi1wKb+9FScqyz4lbQAvlLNJ71W8zybpsKD0dLye2SMmu0uP9K0zldisX7zyQthVeUjNCkKbmZ19ci0vjOZAqEIcRUKNAWHP2/4Kp1sOpTTDDGCXFmHEuioizgVl1FrrmTBbAoKT2f0cQvIkwkZI6JUI5xbUmMMkbjjtQkGzZmmRhNrfW0GFYl0UCQGHqe1sahTP5Crl019PKKsPILS0EuFSEgaJDYMWxgqy0GqmpgFKtu6qxBSlmrgreOdsnDuI76H64G7RJv58QgUZUKN0wL5mU6lEcXf4BqWEBiOEWMtcxHiscvO8la1pIBzdhfrZ2eRTeAn2g46L8f8yQmuebxvC3ybkgzMtEeYiVlBXpbsIW0VCSmjwOwhxFwhZq0TYVW3mNH9IyHfmYbOCsPfrCSFpXWg4SkKcO4q7kalLY/HKhLLhQ2gFISNqmRCs0u8hnJ7bKu2icj6o6tlVEgsGQrOC0GnzSkLiFCwDENr89xBeOtHDLaQykISNkyBsyoZTiRAsncrPvJMgvLKgA9PLGSpIpWZSbvdw5sIjJQxvZYSznMmHVDYsIPyWjfh4CY1VRJiNBUPOUn47ykZ8xIRDKKXsKnsIUnktCTeZQ0dMCC0vlYpl4ag0X06m53fEhGHLi7LisNUU2uPO8iQIAQb6NSXCriS8OhFC6M1RtTCoI4uuKrSXJVR/F2FTUJW4+VFZ/IVw9UbXM4eeSdi02G9peUstBVdZUIilR7nawydCqDHofi9yg9eK14E22xClg/bPJ5xYwv9dhB3oueVNvhy94eoIvWCrbb5ptUYfinH/GkJjASa/MIoeEmYM/vMJq/VrCLELhH5+lulaUJ4b+ztmQgW5lsmtZe7QSREiPBUqtfImfyoJs23VoyYEkw+EucFaHBJmgztqQmXJKCWj/DgoBUIjF/ERE8oJIEpyzTajp9JbJx/xMRNqjLTZt2yOeR2z0AA5dkJK1GGOkJmU5mbJj5uwz6BzkZ8qnBDKc/OZx02IA87tPKEgVOTsxzETYgWNOafWPJPMpk/A4Oc7VEdMCPadEiKyTglNaQ6X2THUoyZU0NQyqZMtlFOHS8JcxMdLCAFdCpNI56AkoTMO8XqnQqgo6OKMEPoFpwntAWEvaz6OmhACupNTgymhgnuc8mF+aOq4CTUL8rDXzxMGJ0MoJ3/b1CYZdx7D4mrBE+wPIFQJVyWhovzYmy0nSBLuScJ0+ql/w9XCGPEfQlhyqtpHWJp8SZhO+GpAKP5EQvHUUorvgfBmngT5HkpprgXwxxC+70tfz728n/NqMS59Sbc3NoWaH8P4Iwg5xO8P/MENyAcNTAPtKUW6B6lWmtApUwtzpn8EIYkETUwqfYTp8ICslAP71jpJaFcSerkr/iBCAukI3aAPIZxb0LlIzUMPCIOXJdzx8hxCSAmlwb3rjiO5bnfvUhpWntQah30JmZChqqqBkYvh6YSPPugDaxr/KnxUsnKUPzy2FqIgDHlIA31LyFSVjvUXIQRbNF+C5qCLZcnX9tC6tIFjQhmyfgihbKZ1vDiFfUtVnSl+EUJ4ThshhHUOcqxneV8CIXmSxQ/lUpMyT4mi0IQajmG8SB5C75Oapkna7TYnzyNkUatN6uCWG+paJhHb6aeGoES8z1/wZEKwPa8g/+ChPd+D9ime7JEUtOE8JZwL/mKEcPGyNZtNL13bJnT4PMInj7WBrh1OxXb101JQs9CkeQZhfA4aFb9tljuEsqjJLuMUjiBDi2E9xx6GlR+0BOnv8sWQmvvEpLM4hV0gzM/rv0Cb5jIiLFQQv46wIQk/xikcc0oWhXr5pQgL+nWEnmztvYsMqRwgJm9KC+6OPA/xwjTpSsakYI9RTouLF4/a6wtJLJfEJj8itIp+bsdOiLALeSgeQsIHK1xVWrjg2AnRFFockQ3EDcjDwhjG8RMqqCU69iRaMLgUJjlBwiUkIB5ek6uPi02akyDk3AkbNZCdJlkZhWr92AnlUlLK1Wheu6ua6qK4UPD4CTXWpiImZFSU1oEfP6ExbFM1Wh7onpWcok+BUHfB4ofdN31hc/GxfMVxE0LA94SrMgGKvgJzmF9xiY6fUJHeCrxzIwPwViZnRXN4EoRWTKgRIps0J5iHklDaeY2Y/OyqvF3JcRNCwBcWIT4UTjwXHbXUjzt6QkhhIyYMt5HolXbLOXpCjL5alPgyVXOL8+Hp5WGG8BoI70+OEALWA0rkvh7hQq/1CRLq2KWERoSyG3WShETmIUYbapf6v6dAiKFRQ+XOHPidSgtbnUTnj51QRsaprEM/Om1R3A7uZAjJECPlnd0W/ZMkbEAeyr2GFnabGadJeAaZ10BGwNV3ZfcCuT/NsRM+dGwTCDXGz9zTJMTBrSnuQsLpaRKiMScRYXnzrl2Eyjv+AoQ536afSbixzPNLNPdvzys2+4SI25SqIh8xDlQuly5mDx1G6FCVr4pLyGy7alfBlyFsornDJ8UBb/QIIS0szjw0D2mplDaYrarsZxBeWuR8iloOv6nwywmX6APhskxYWD6ElYiw0HqvJlz6QGgVl3IS1RZVhE/3NonUZOysu5sQDTnN7XyIQ0KVFwkRDgm7+xDOJeFNfjlug8lAG4UrNemK9kzCBiPWCI0cblVsnQs495xyuaBte1ZXlH5HpbfifbEnsraoWfR1qCb05Ja9Ivve65CvndtPveJTjry+nk3IAjSi5Z3xUEjY4oRS00v3TVRQyyKUs36xq3XFuGoWRiSrCfGYq7ZsYaSbN+hj0uFl76nUV//pknkYoLFZ9q9DIWF/YJqmNcrsDNkfEpPDAykaF6/Hudl5l/NQrSaU85bcFsskBEWum2OclfxvX4JQH6psaHwxrXXFSZmCETXbxFonpU/7RkwqPeBL5lN6VavsS5q3WHNpxZ578JBW0qWZxZPqCsLvb6gkLKFIQuoXD+e3Nf+RcGCrbPqtmlDqq3DkxoLjuSG9nPrXPcqpbY3LzQNZ0uROub3Wgycv9ZouY5CFpTzEitK0VA6I09Bz1NA2N22Tqn5pH/HYC3pzvVxeRJJeq9cKqqgzdqtr2x0BRXXXRuDKnQ02SaVWe+zeD5mwbZs7/3oVfqz4oSddEW9vBywYj1fC4Ta0Xfh5iRBMywwMPOdULFzXZRNhfjJNp7ST65bQspK9oOWPgVFuXz6m2TmDap6Jqv3LQ0I078HbBDoj8EpKh3mr26/0Rcbav75jQ+vLlBUwmBlOTIv9X6M4Zyf3lm8yh0HEpgWZRwmXi1lwOWtST3YzFvwIr/oBhAqaTuR22f73R3bMN6ZDx4FEmHLrcF+47zEqv4Uy6Qgvx368WbncE9uxvnwoVxPRndqmZ0HVBE+D808+2zSSM5krGxPHL4mV989+TPhrqynVeszVGHvL2du3/7FurGGwbjz6EhjzaRAwq231gmA2bxioaDZTadej4O35+VkvGLV2VJfe5WUL1Gwlgh+b+3y+IE37/lcamtbQ9nEjh/pI8zxjn1U82Oh/7R+U4CiCAy6GN0KPHP0fuS08F5/W8WPO1pFHfXKB8ujSgTDUaHXBjoUZSrwMIa8fMdWqVatWrd+qQ9fk7Hfn00PdS7khPVw6VKFw8VGpeRUZt0zHSdkGlTFg+vZGnL0JF1OC9XiFE8b5D6E87Vm0WO+vt2/evFks3LhtcREk3YxN0NjG0A9cd9HpLKbLsGW/Pfxl/GUcplTXN2n//mvwMW7affjScd8FY7fX6wWLeXTfPOhGix6RMf4WbeIOf7Xe4i/Z03Avkz60JOwGQxeS98Z1g8snAULXorOK1IsJLyfJPkOun+xf8zA5t9++fWvfThbz9BszyoBSEs7KYd2dJJ+88CbxeA2efV6thivndriCe2PC5eA+vBD+Gb2exoQYD+zFUEbwOtiuvpKdkJVzFieQVPSu9tHH8w/hZ2EUZfuhqn9eJYT36YAYJPpB13WtMb1hd2i7AygQOtHGwxjf+8304u1qLsPQdaTdfDYw3OxFm3DMJ9GqB0noR+VFEt70PBRGwCbXKF5OqaCeBQ1tSB3crj+tlM7SQdw4Y5qv/md7ZDxICLXJ9rM0S9Hpb19ZfbD6rzU0FEk4Tgcd+4MtYXhHf7LYvpbyvgs/GnPMEEpN7HiF71yOrsXrXJBrFRcQHEz4qli8LzOEr3OEUbLw/SQeQ4J8Gay8sXWFIsIkJEmYqSIg/7PLk4EQlwkVPyKEOmYWH40Iy+4FBxI6+xOiKFmt2K04JGTa9ffLsErcTagdSLj0x/gF8/BAQl1uAupuC6n+umf0hdys98UI4dSV/83QX47w9WGEcnmo/yY2d5CHPQN1ZX30GGH/1dDI/LqL8C8jzri719EjlITj86rPw/1kwo3/EWUJlzfrHxGuDiBE6L+DuLINCUterz+PMLQQUG8nL39M6K0C2fh4LuHkr/gi/X5yEVW2L0O4tRaJsXk8D6Gi8d8ZOUI0u9HK1uJQQuRvrUVzMPRyhM/Txp/NQyV1QTXhw2TV0LTGfDm+GV7FYzURoYLuxFROt5wnY9YHE8qm7qTd0CCK665D4lgl4b0/uwvTpz01J2e3t/KTmq9E0hrclYfclwPO52zTjz+Vus1DRV8R/AKEhMjPgDpis93ZKcxDIsJvfg7mTyXcON1wNDLda28XIR1/WK+D7Mf+QkI5AD1zGviZhBi/Iu50Or33g+SFCQkt9yJM4JMnoGbbydxkkHBnKZXl+OvfgYG2DbyYEKEGNNafRSh/G3RkyFc36XduZLv03n92m+Z277o0XNlmsnQmekuo6wxS557/kyA9yVrY0DxX0CJtpknCYYVT6GE6oF0a1kUbkXZitoQYrydzNH61P2FFyzu0h7qsqpP3QBK6zyfcv9UWEs6ddOPBpJTC2dFBhLssvvy6or/aVnovRFi2+INNFDy8Wq9KFh+fWV9R3MdPCVEAfYx97eF84kYACHfz9jC8KBhsJ/rCmqbyo77PJPRHcfC6+yr5yGli8ad+snlWhrDpT4f7Ey6i24FQZNo0MWFrsN0W4Ge1S5vOwouCx1WEjZuFp5cIPcsiexOKuDhA+8xPJma3hIrmbzdzjAjfvzjhnfM2JvSGFYTe6uwuSxh1efQNfYww17fQROQDJL9k598VCZERSF+dtNX2bMJSTeMJ6330Rd+7QfpNXC8ZiVgPZmkp9TtxtbAccCu1h5Ni/zDng7JyLqS7ggK52U42F1P+7sR9i+br0XYgMurjR6b64C2UdhKiy0lo1dHDKuOIt61L5cfZksouIcSoT3hqyMqEuXnj64kbTlT33cw+xsrfdtw/1ETsdhIRlj00DlO5lEL3aBK0llfT1cRNfQJSQiMYbDs0uj75HBOikSOyhNkHXiTE3Ulnupy3ehPXSIdeE0K9O2mmfQurNxp1u90R6Gl7fs1KHyRWsDe1/b+/TzqXXrrLsPY9iAnRWmz0IiFGS3aTEGqT3Hb22vfPOVdLrLc6g8H3yWraRwmhcrOICXFr0k32yfvW7sgP0atCqOWPQ+8jvd/3Kg5rjeVFI/dBZOVr4siGte1oIlIamR1etdQ1TMtN+MMNxdnufmN53cjFrDwkPjpKGgHqS3n9vqb1S550e0nO4u86tec8QcVVhen2HVsB7o66Irj9rtxfODtn8pgU5Wl1eZxopXDwhze8mB53e8jsfZedhzpkS7ztNoj5Y8nbmgalxD/WThi1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrT9F/w8UfEL4pwGSqwAAAABJRU5ErkJggg=="
          alt="logo"
        />
      </div>

      <div style={styles.totalPicStyle}>{productList}</div>
    </div>
  );
}

export default App;
