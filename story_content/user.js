function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KgfNaiXFiZ":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyfwWJYLqbeUVXv2IWTdptMnzdxYBkhqRjI1Lbl8SEQMTd0J-A2Vao1_vq3bye7LMix9A/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

