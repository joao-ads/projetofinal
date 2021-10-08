import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  OnTouched: any;
  OnChange: any;
  
  constructor(private el: ElementRef) { }


  /**
   * implementa evento de diretiva
   * @param $event 
   */
  @HostListener('keyup', ['$event']) onkeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }
    $event.target.value = valor;
    this.OnChange(valor);
  }

  /**
   * Registrar função a ser chamada para atualizar valor do modal
   * @param fn 
   */

  registerOnChange(fn: any): void {
    this.OnChange = fn
  }

  /**
   * Registrar função a ser chamada para atualizar valor do modal em touched
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  /**
   * obter valor em model
   * @param value 
   */
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
}
