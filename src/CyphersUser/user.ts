import { CyphersApiKey, CyApiLink } from '../config';
import { ParseError, parseErrorMsg } from '../error';
const apiLink: string = CyApiLink + 'players/';
import * as request from 'request-promise-native';

export const getUserInfo = (): string => {
    return '';
};

export const getPlayerID = async (playerName: string): Promise<string> => {
    const options = {
        uri: apiLink,
        qs: {
            apikey: CyphersApiKey,
            nickname: playerName,
        },
    };
    try {
        return JSON.parse(await request.get(options)).rows[0].playerId;
    } catch (error) {
        return ParseError(error);
    }
};

export const getRecent = (): string => {
    return '';
};

export const getEntirelyByName = async (
    playerName: string,
    gameTypeId = 'normal'
): Promise<string> => {
    const playerID = await getPlayerID(playerName);
    if (playerID === parseErrorMsg) return parseErrorMsg;
    const re: string = await getEntirely(playerID);
    return re;
};

export const getEntirely = async (
    playerID: string,
    gameTypeId = 'normal'
): Promise<string> => {
    const options = {
        uri: apiLink + playerID + '/matches',
        qs: {
            gameTypeId: gameTypeId,
            apikey: CyphersApiKey,
        },
    };
    try {
        const result: string = await request.get(options);
        const json = JSON.parse(result);
        const record = json['records'];
        const s_record =
            '- 공식  |  ' +
            record[0]['winCount'] +
            '승  |  ' +
            record[0]['loseCount'] +
            '패\n' +
            '- 일반  |  ' +
            record[1]['winCount'] +
            '승  |  ' +
            record[1]['loseCount'] +
            '패\n';

        const matches = json['matches']['rows'];
        var matchString = '';
        for (var i in matches) {
            var item = matches[i];
            matchString +=
                '* ' +
                item['playInfo']['result'] +
                '\t' +
                item['playInfo']['characterName'] +
                '\t' +
                item['position']['name'] +
                '\n ' +
                item['matchId'] +
                '\n';
        }
        const outstring: string =
            '```markdown\n' +
            json['nickname'] +
            '\t|\t' +
            json['tierName'] +
            '\t|\t최대RP\t' +
            json['maxRatingPoint'] +
            '\n------------------------\n' +
            s_record +
            '\n------------------------\n' +
            matchString +
            '```';
        return outstring;
    } catch (error) {
        return ParseError(error);
    }
};
