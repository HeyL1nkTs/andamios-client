import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sliceGroups',
    standalone: true
})
export class SliceGroupsPipe implements PipeTransform {
    /**
     * @description Divides an array into groups of the specified size.
     * @param value The array to slice into groups.
     * @param groupSize The size of each group.
     * @returns An array of arrays, where each inner array is a group.
     */
    transform<T>(value: T[], groupSize: number): T[][] {
        if (!value || !groupSize) {
            return [];
        }
        const groups: T[][] = [];
        for (let i = 0; i < value.length; i += groupSize) {
            groups.push(value.slice(i, i + groupSize));
        }
        return groups;
    }
}
