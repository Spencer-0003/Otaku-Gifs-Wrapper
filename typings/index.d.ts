declare module "otakugifs-wrapper" {
    export declare class account {
        key: string;
        constructor(apiKey: string);
        reset_key(): Promise<any>;
    };

    export declare class gifs {
        key: string;
        constructor(apiKey: string);
        all(): Promise<any>;
        angrystare(): Promise<any>;
        bite(): Promise<any>;
        bleh(): Promise<any>;
        blush(): Promise<any>;
        brofist(): Promise<any>;
        celebrate(): Promise<any>;
        cheers(): Promise<any>;
        clap(): Promise<any>;
        confused(): Promise<any>;
        cry(): Promise<any>;
        cuddle(): Promise<any>;
        dance(): Promise<any>;
        drool(): Promise<any>;
        embarrassed(): Promise<any>;
        handhold(): Promise<any>;
        happy(): Promise<any>;
        headbang(): Promise<any>;
        hug(): Promise<any>;
        kiss(): Promise<any>;
        laugh(): Promise<any>;
        lick(): Promise<any>;
        love(): Promise<any>;
        mad(): Promise<any>;
        nervous(): Promise<any>;
        no(): Promise<any>;
        nom(): Promise<any>;
        pat(): Promise<any>;
        peek(): Promise<any>;
        pinch(): Promise<any>;
        poke(): Promise<any>;
        pout(): Promise<any>;
        punch(): Promise<any>;
        roll(): Promise<any>;
        run(): Promise<any>;
        sad(): Promise<any>;
        scared(): Promise<any>;
        shrug(): Promise<any>;
        shy(): Promise<any>;
        sigh(): Promise<any>;
        sip(): Promise<any>;
        slap(): Promise<any>;
        sleep(): Promise<any>;
        smack(): Promise<any>;
        smile(): Promise<any>;
        smug(): Promise<any>;
        sorry(): Promise<any>;
        stare(): Promise<any>;
        surprised(): Promise<any>;
        thumbsup(): Promise<any>;
        tickle(): Promise<any>;
        tired(): Promise<any>;
        wave(): Promise<any>;
        wink(): Promise<any>;
        yawn(): Promise<any>;
        yay(): Promise<any>;
        yes(): Promise<any>;
    };    
};