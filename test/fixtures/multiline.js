// prettier-ignore
const Test = () => (
  <div>
    <style jsx>{`
      body {
        color: red;
      }

      :hover {
        color: red;
        display: flex;
        animation: foo 1s ease-out;
      }

      div:hover
        a {
        display: none;
      }

      [data-test] > div {
        color: red;
      }
    `}</style>
  </div>
);
