var edge = require('edge');

var value = edge.func(function() {/*

   #r "System.Speech.dll"

  using System;
  using System.Threading.Tasks;
  using System.Speech.Synthesis;

   public class Startup
  {
    public async Task<object> Invoke(object input)
    {
      SpeechSynthesizer reader = new SpeechSynthesizer();
      Prompt prompt = new Prompt(input.ToString());
      reader.Speak(prompt);
      return null;
    }
  }
*/});

 value("Erro.. ao Entrar no Servidor..", function (error, result) {
  if(error) throw error;
  console.log(result);
});