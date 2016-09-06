import {Component, Input} from "angular2/core";
@Component({
    selector: 'spinner',
    template: '<i *ngIf="visible " class="fa fa-spinner fas-spin  fa-3x"></i>'
})

export class SpinnerComponent{
    @Input() visible = true;
}