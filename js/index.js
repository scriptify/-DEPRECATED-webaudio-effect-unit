import EffectUnit from './EffectUnit';



const main = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const gainEff = new EffectUnit({
    name: 'gain',
    values: [
      {
        name: 'isMuted',
        options: {
          type: 'bool',
          defaultValue: true
        },
        set: (effectChain, val) => {
          effectChain.gain.gain.value = val ? 0 : 0.6;
        }
      },
      {
        name: 'gain',
        options: { // Those values are all just optional metadata for you (e.g. a UI-component could use this to know how to configure the range slider)
          type: 'range',
          defaultValue: 1, // The only value which could be of real interest here: If this field is present, the 'set'-method gets executed once with it's value
          min: 0,
          max: 0.6,
          step: 0.1
        },
        set: (effectChain, val) => {
          effectChain.gain.gain.value = val;
        }
      }
    ],
    effectChain: {
      gain: audioCtx.createGain()
    }
  }, audioCtx);

  const hpEff = new EffectUnit({
    name: 'highpass',
    effectChain: {
      hp: () => {
        const hp = audioCtx.createBiquadFilter();
        hp.type = 'highpass';
        return hp;
      }
    },
    values: [
      {
        name: 'frequency',
        options: {
          type: 'range',
          defaultValue: 0,
          min: 0,
          max: 200,
          step: 10
        },
        set: (effectChain, value) => {
          effectChain.hp.frequency.value = value;
        }
      }
    ]
  }, audioCtx);

  const osci = audioCtx.createOscillator();
  osci.type = 'square';
  osci.frequency.value = 200;
  osci.connect(gainEff.input);

  gainEff.connect( hpEff );
  hpEff.connect( audioCtx.destination );

  //osci.start();

  const hpOptions = hpEff.getValueOptions('frequency');
  let currHpFreq = hpOptions.defaultValue;
  let up = true;
  window.setInterval(() => {
    if(up)
      currHpFreq += hpOptions.step;
    else
      currHpFreq -= hpOptions.step;

    if(currHpFreq >= hpOptions.max)
      up = false;

    if(currHpFreq <= hpOptions.min)
      up = true;

  if(currHpFreq % 100 === 0)
    gainEff.setValue('isMuted', true);
  else
    gainEff.setValue('isMuted', false);

    hpEff.setValue('frequency', currHpFreq);
  }, 100);

};

main();


export default EffectUnit;
