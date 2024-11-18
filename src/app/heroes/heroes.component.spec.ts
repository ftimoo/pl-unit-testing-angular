import { Component } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe("HercoComponent",()=>{
    let  heroComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(()=>{
        HEROES = [
            {id: 1, name: "spiderman", strenght: 5},
            {id: 2, name: "wonderwoman", strenght: 12},
            {id: 4, name: "hulk", strenght: 33},
            {id: 5, name: "widdow", strenght: 8}
        ];

        mockHeroService = jasmine.createSpyObj(["getHeroes","addHero","deleteHero"]);


        heroComponent = new HeroesComponent(mockHeroService);

    })

    it('should remove the indecated hero from the list',()=>{
        mockHeroService.deleteHero.and.returnValue(of(true));
        heroComponent.heroes = HEROES;
        
        heroComponent.delete(HEROES[2]);

        expect(heroComponent.heroes.length).toEqual(3)
    });
    it('should call delete hero with hulk(third hero)',()=>{
        mockHeroService.deleteHero.and.returnValue(of(true));
        heroComponent.heroes = HEROES;
        heroComponent.delete(HEROES[2]);
        expect(mockHeroService.deleteHero).toHaveBeenCalledWith({id: 4, name: "hulk", strenght: 33});
    });
})