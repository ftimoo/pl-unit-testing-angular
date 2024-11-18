import { MessageService } from "./message.service"

describe("MessageService", ()=>{
    let messageService;
    beforeEach(()=>{
        messageService = new MessageService();
    });
    it("should be empty if created", ()=>{

        expect(messageService.messages.length).toEqual(0)
    });
    it("should have 4 messages if 4 are added", ()=>{
        messageService.add("1");
        messageService.add("MESSAGE 2 is longer");
        messageService.add("MESSAGE 2 is longer");
        messageService.add("1");
        expect(messageService.messages.length).toEqual(4)
    });
    it("should return correct message ", ()=>{
        messageService.add("1");
        messageService.add("MESSAGE 3 is longer");
        messageService.add("1");
        messageService.add("MESSAGE 2 is longer");

        expect(messageService.messages[messageService.messages.length-1]).toEqual("MESSAGE 2 is longer")
    });
})