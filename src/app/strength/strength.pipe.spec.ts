import { StrengthPipe } from "./strength.pipe";

describe("SttrengthPipe", () =>{
    it("should display weak if strength is 5", ()=>{
        //Arrange
        let pipe = new StrengthPipe();

        //Act
        let val = pipe.transform(5);

        //Assert
        expect(val).toEqual("5 (weak)");        
    });
    it("should display strong if strength is 10", ()=>{
        //Arrange
        let pipe = new StrengthPipe();

        //Act
        let val = pipe.transform(10);

        //Assert
        expect(val).toEqual("10 (strong)");        
    });
    it("should display unbelievable if strength is 22", ()=>{
        //Arrange
        let pipe = new StrengthPipe();

        //Act
        let val = pipe.transform(22);

        //Assert
        expect(val).toEqual("22 (unbelievable)");        
    });
});