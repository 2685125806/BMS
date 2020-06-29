package com.bms.bms.service.impl;

import com.bms.bms.entity.Books;
import com.bms.bms.mapper.BooksMapper;
import com.bms.bms.service.BooksService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wx
 * @since 2020-05-24
 */
@Service
public class BooksServiceImpl extends ServiceImpl<BooksMapper, Books> implements BooksService {

}
