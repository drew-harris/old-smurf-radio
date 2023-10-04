export default function Embed() {
  return (
    <>
      <iframe
        src="https://smuradiofrequency.mixlr.com/embed"
        frameBorder="0"
        scrolling="no"
        height="200px"
        width="100%"
      >
      </iframe>
      <small>
        <a
          href="https://mixlr.com/"
          // style="color:#1a1a1a;display:block;font-family:Helvetica,sans-serif;font-size:11px;text-align:left;padding: 4px 0;"
          style={{
            color: "#1a1a1a",
            display: "block",
            fontSize: 11,
            textAlign: "left",
          }}
        >
          smuradiofrequency is on Mixlr
        </a>
      </small>
    </>
  );
}
