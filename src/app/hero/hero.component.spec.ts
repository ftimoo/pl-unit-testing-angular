import {ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { provideRouter, RouterLink } from "@angular/router";
import { By } from "@angular/platform-browser";

describe('heroComponent',()=>{
    let fixture: ComponentFixture<HeroComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HeroComponent],
            providers: [provideRouter([])],
        });
        fixture = TestBed.createComponent(HeroComponent);

    });
    it("schould have correct hero",()=>{
        fixture.componentInstance.hero = {id: 4, name: "hulk", strength: 33};
        
        expect(fixture.componentInstance.hero.name).toEqual("hulk");
        
    });
    it("schould render a tag with correct name and binding.",()=>{
        fixture.componentInstance.hero = {id: 4, name: "hulk", strength: 33};

        fixture.detectChanges();

        let aTag = fixture.debugElement.query(By.css("a"));

        let aTagHTMLElement = aTag.nativeElement as HTMLElement;

        expect(aTagHTMLElement.textContent).toContain("hulk");
        
    });
});