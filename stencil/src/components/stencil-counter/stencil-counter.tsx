// 753 chars
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-counter',
  styleUrl: 'stencil-counter.css',
  shadow: true,
})
export class StencilCounter {
  @Prop() count: number = 0 ;

  inc(){
    this.count++;
  }

  render() {
    return (
        <button onClick={() => this.inc()}>
          Clicked {this.count} times
        </button>
    );
  }

}
