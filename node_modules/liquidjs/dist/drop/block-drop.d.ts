import { Drop } from './drop';
export declare class BlockDrop extends Drop {
    private superBlockRender;
    constructor(superBlockRender?: () => Iterable<string>);
    super(): Iterable<string>;
}
