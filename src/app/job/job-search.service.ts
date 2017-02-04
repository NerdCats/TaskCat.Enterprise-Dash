import { Injectable } from '@angular/core';
import { Client, SearchResponse } from 'elasticsearch';
import { LoggerService } from '../shared/index';

/** Job search service powered by elasticsearch */
@Injectable()
export class JobSearchService {
    private _client: Client;

    constructor(private loggerService: LoggerService) {
        if (!this._client) {
            this._connect();
        }
    }

    /** Execute a full text search over a elasticsearch index */
    textSearch(indexName: string, query: string): PromiseLike<SearchResponse<{}>> {
        if (query) {
            this.loggerService.log(query);
            return this._client.search({
                index: indexName,
                q: `title:${query}`
            });
        } else {
            Promise.resolve({});
        }
    }

    /** Check whether the elasticsearch serever is available or not */
    isAvailable(): any {
        return this._client.ping({
            requestTimeout: Infinity,
            body: 'hello elasticsearch!'
        });
    }

    private _connect() {
        this._client = new Client({
            host: 'http://localhost:9200',
            log: 'trace'
        });
    }
}
