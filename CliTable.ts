import Table from 'cli-table2';

/**
 * CliTable class is used to display data in tabular form on command prompt
 */
export class CliTable{

    table: Array<any>;
    constructor(head: string[] = []) {
        this.table = new Table({
            head: head
        });
    }

    /**
     * This method push the row data in table object
     * @param {Object} item list of data to display in a row
     */
    public pushToTable(item: Object): void {
        this.table.push(item);
    }

    /**
     * This method console the table on command prompt
     */
    public consoleData(): void{
        console.log(this.table.toString());
    }
}