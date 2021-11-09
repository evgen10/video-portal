import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {

  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe works', () => {
    const pipe = new DurationPipe();
    const minutes = 160;
    const pipeResult = '2 h 40 min'
    expect(pipe.transform(minutes)).toEqual(pipeResult);
  });
});
