import { INode } from './ast/node';
import { ILine } from './line';
import { IState } from './state';

export type ErrorArray = [string, string, number, number, number, null | string, number];

export interface IRule<T extends IState = IState> {
	state: T;
	cache: Dictionary;

	nodesFilter: string[] | null;

	errors: ErrorArray[];

	context: Dictionary;
	clearContext(): void;

	checkNode?(node: INode, lines?: ILine[]): void;
	checkLine?(line: ILine, index?: number, lines?: ILine[]): void;

	msg(message: string, line: number, start: number, end: number, fix: null | string, endLine: number): void;

	isMatchType(type: string): boolean;
	clearErrors(): void;
}
