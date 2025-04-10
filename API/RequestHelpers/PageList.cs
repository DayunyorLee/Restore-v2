using System;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;

namespace API.RequestHelpers;

public class PageList<T> : List<T>
{
    public PageList(List<T> items, int count, int pageNUmber, int pageSize)
    {
        Metadata = new PaginationMetadata
        {
            TotalCount = count,
            PageSize = pageSize,
            CurrentPage = pageNUmber,
            TotalPages = (int)Math.Ceiling(count / (double) pageSize)
        };
        AddRange(items);
    }

    public PaginationMetadata Metadata{get; set;}

    public static async Task<PageList<T>> ToPageList (IQueryable<T> query, int pageNumber, int pageSize)
    {
        var count = await query.CountAsync();
        var items = await query.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
        return new PageList<T>(items, count, pageNumber, pageSize);
    }
}
